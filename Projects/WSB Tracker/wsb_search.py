from psaw import PushshiftAPI
import datetime as dt
import re
import requests
import numpy as np
import pandas as pd
#Data Source
import yfinance as yf
#Data viz
import plotly.graph_objs as go
key = 'P1F9OEHH4SDPHEMB' # free key from https://www.alphavantage.co/support/#api-key -- no registration required





api = PushshiftAPI()

print('hello')


start_epoch=int(dt.datetime(2017, 1, 1).timestamp())

submissions = api.search_submissions(after=start_epoch,
                                    subreddit='wallstreetbets',
                                    filter=['url','author', 'title', 'subreddit'],
                                    limit=100)

for submission in submissions:
    #print(submission.created_utc)
    #print(submission.title)
    #print(submission.url)
    
    words = submission.title.split()
    cashtags = list(set(filter(lambda word: word.lower().startswith('$'), words)))

    if len(cashtags) > 0:
        print(cashtags, '$ symbol found')
        x = cashtags
        str1 = ''.join(x)
        print('This is the x value ', str1[1:])
        data = yf.download(tickers=str1[1:], period='1w', interval='1m')

        #declare figure
        fig = go.Figure()

        #Candlestick
        fig.add_trace(go.Candlestick(x=data.index,
                        open=data['Open'],
                        high=data['High'],
                        low=data['Low'],
                        close=data['Close'], name = 'market data'))

        # Add titles
        fig.update_layout(
            title= str1[1:] + ' live share price evolution',
            yaxis_title='Stock Price (USD per Shares)')

        # X-Axes
        fig.update_xaxes(
            rangeslider_visible=True,
            rangeselector=dict(
                buttons=list([
                    dict(count=15, label="15m", step="minute", stepmode="backward"),
                    dict(count=45, label="45m", step="minute", stepmode="backward"),
                    dict(count=1, label="HTD", step="hour", stepmode="todate"),
                    dict(count=3, label="3h", step="hour", stepmode="backward"),
                    dict(step="all")
                ])
            )
        )

        #Show
        fig.show()
                # print(cashtags)
                # print(submission.title)
            