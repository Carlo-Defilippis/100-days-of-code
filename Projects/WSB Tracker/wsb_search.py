from psaw import PushshiftAPI
import datetime as dt

api = PushshiftAPI()

print('hello')   


start_epoch=int(dt.datetime(2017, 1, 1).timestamp())

submissions = api.search_submissions(after=start_epoch,
                                    subreddit='wallstreetbets',
                                    filter=['url','author', 'title', 'subreddit'],
                                    limit=30)

for submission in submissions:
    #print(submission.created_utc)
    #print(submission.title)
    #print(submission.url)
    
    words = submission.title.split()
    cashtags = list(set(filter(lambda word: word.lower().startswith('$'), words)))

    if len(cashtags) > 0:
        print('$ symbol found')
        print(cashtags)
        print(submission.title)
    