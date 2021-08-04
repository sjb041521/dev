import json
import tweepy
from google.cloud import pubsub_v1
from google.oauth2 import service_account
key_path = "gcp-study-321416-0fe5cf02bfff.json"
credentials = service_account.Credentials.from_service_account_file(
    key_path,
    scopes=["https://www.googleapis.com/auth/cloud-platform"],
)
client = pubsub_v1.PublisherClient(credentials=credentials)
topic_path = client.topic_path('gcp-study-321416', 'tweets')
twitter_api_key = 'wYBGxknd4GSPiXJNO8HaXzm0T'
twitter_api_secret_key = 'Wqyy2tWXW4CmTtsh6tUSGqKcRxjPgUUwA6aw2utfNpErvNtOgZ'
twitter_access_token = '1421901465115713537-EG08V3NSOgKTTfNG9OnnHqBnpUhls9'
twitter_access_token_secret = 'yocBzROiN3S91tSWebPjv1RkfBKQOUOyE4qiXcZMlV8LY'


class SimpleStreamListener(tweepy.StreamListener):
    def on_status(self, status):
        print(status)
        tweet = json.dumps(
            {'id': status.id, 'created_at': status.created_at, 'text': status.text}, default=str)
        client.publish(topic_path, data=tweet.encode('utf-8'))

    def on_error(self, status_code):
        print(status_code)
        if status_code == 420:
            return False


stream_listener = SimpleStreamListener()
auth = tweepy.OAuthHandler(twitter_api_key, twitter_api_secret_key)
auth.set_access_token(twitter_access_token, twitter_access_token_secret)
twitterStream = tweepy.Stream(auth, stream_listener)
twitterStream.filter(track=['data'])
