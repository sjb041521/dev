import tweepy

twitter_api_key = 'wYBGxknd4GSPiXJNO8HaXzm0T'
twitter_api_secret_key = 'Wqyy2tWXW4CmTtsh6tUSGqKcRxjPgUUwA6aw2utfNpErvNtOgZ'
twitter_access_token = '1421901465115713537-EG08V3NSOgKTTfNG9OnnHqBnpUhls9'
twitter_access_token_secret = 'yocBzROiN3S91tSWebPjv1RkfBKQOUOyE4qiXcZMlV8LY'


class SimpleStreamListener(tweepy.StreamListener):
    def on_status(self, status):
        print(status)


stream_listener = SimpleStreamListener()
auth = tweepy.OAuthHandler(twitter_api_key, twitter_api_secret_key)
auth.set_access_token(twitter_access_token, twitter_access_token_secret)
twitterStream = tweepy.Stream(auth, stream_listener)
twitterStream.filter(track=['data'])
