import boto3, botocore, configparser

def main(s3Client):
    
    print('\nStart of create bucket script\n')

    print('Reading configuration file for bucket name...')
    config = readConfig()
    bucket_name = config['bucket_name']

    print('Verifying that the bucket name is valid...')
    
    verifyBucketName(s3Client, bucket_name)
    
    createBucket(s3Client, bucket_name)

    print('\nConfirm that the bucket exists...')
    verifyBucket(s3Client, bucket_name)

    print('\nEnd of create bucket script\n')

def verifyBucketName(s3Client, bucket):
    try:
        
        s3Client.head_bucket(Bucket=bucket)
        raise SystemExit('This bucket has already been created in your account, exiting because there is nothing further to do!')
        
    except botocore.exceptions.ClientError as e:
        
        error_code = int(e.response['Error']['Code'])
        
        if error_code == 404:
            
          print('Existing Bucket Not Found, please proceed')
          
        if error_code == 403:
            
          raise SystemExit('This bucket has already owned by another AWS Account, change the suffix and try a new name!')

def createBucket(s3Client, name):
    
    session = boto3.session.Session()

    current_region = session.region_name
    print(current_region)
    print('\nCreating ' + name + ' in ' + current_region)

    response = s3Client.create_bucket(
      Bucket=name,
      CreateBucketConfiguration={
          'LocationConstraint': current_region
      })

    print('Success!')

def verifyBucket(s3Client, bucket):
  
    waiter = s3Client.get_waiter('bucket_exists')
    waiter.wait(Bucket=bucket)

    print('The bucket:' + bucket + ' is now available.')

def readConfig():
    config = configparser.ConfigParser()
    config.read('./Specs/config.ini')
    
    return config['S3']

client = boto3.client('s3')

try:
    main(client)
except botocore.exceptions.ClientError as err:
    print(err.response['Error']['Message'])
except botocore.exceptions.ParamValidationError as error:
    print(error)