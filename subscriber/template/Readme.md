# {{data.path}}

Subscriber with support to connect to different queues.

## Dependencies required

### Google Credentials Service Account

To run your project in localhost you need a Google Credentials Service Account in the root of your product.

`config/google-credentials.json`

### PubSub Emulator

To run a localhost emulator execute the next command:

`docker run -p 8085:8085 gcr.io/google.com/cloudsdktool/cloud-sdk:385.0.0-emulators gcloud beta emulators pubsub start --project=cencosudx --host-port=0.0.0.0:8085`

## Start your subscriber

`npx nx run {{data.path}}:serve`
