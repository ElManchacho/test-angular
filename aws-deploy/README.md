# This is the AWS deployement section of the o-bing front App

## Step 1 : Generate and deploy ssh key for new AWS deployement

```bash
ssh-keygen -o -t rsa
```

Go to the '.ssh/id_rsa.pub.' public SSH key file location

- copy that public key and paste it in a new SSH key (check the repository's SSH keys, in the Settings section)

![image](https://user-images.githubusercontent.com/74706889/232481503-67759aff-f4a8-4126-984f-0913afcac5df.png)

```bash 
git clone --single-branch --branch aws-deploy  git@github.com:ElManchacho/test-angular.git
```

## Step 2 : Deploy the AWS environnement

Go into the "aws-deploy" folder

Install the AWS dependencies for Python execution

```bash
pip install boto3
```

```bash
pip install botocore
```

```bash
pip install configparser
```

Then launch the ```create-bucket.py``` script.

## Step 3 : Deploy the Angular environnement

Go into the "test-angular-project" folder

Install the angular dependency and it's packages

```bash
npm install -g @angular/cli
```

```bash
npm install
```

Now build the app and deploy it on the AWS S3 bucket you created

```bash
ng build
```

```bash
aws s3 sync ~/environment/test-angular/test-angular-project/dist/test-angular-project/. s3://aws-test-bingo-angular/
```

## Step 4 : make your S3 Angular builded app a static website

Go into the "Properties" tab and scroll down to the "Deployment" option.

![image](https://user-images.githubusercontent.com/74706889/233933563-f8413f72-53cc-471c-bc3e-fd52a69fb64f.png)

Then modify the properties as followed :

![image](https://user-images.githubusercontent.com/74706889/233933375-70a319f0-1ca0-48ac-840a-230ae4f5e224.png)

Finally, access the "Authorization" tab, and the public access property :

![image](https://user-images.githubusercontent.com/74706889/233935030-68ab05ab-93da-4629-9219-cf802bd97517.png)

Modify it's values as followed (unpin all) :

![image](https://user-images.githubusercontent.com/74706889/233935144-4631f9dc-3419-48c2-a59b-937200cf4734.png)

You can now access the public URL that will now appear at the Deployment property location you modified earlier.

### And well done ! You've got yourself a public static AWS hosted Angular website !
