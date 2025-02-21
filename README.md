# Next.js 15: Slow API Call Handling

This repository demonstrates a common issue in Next.js 15 applications where a slow API call can lead to a poor user experience due to a blank screen before a loading indicator appears. The example uses a simulated API call that takes 5 seconds to respond.  The solution demonstrates how to improve the user experience by showing a loading indicator while awaiting the API response. 

## Problem

The original code fetches data from an API.  If the API call takes longer than a couple of seconds, the user sees a blank screen, which is not a good user experience. 

## Solution

The solution addresses this issue by using a loading state variable and displaying a loading message until the data is fetched successfully.  Additionally, error handling is implemented to gracefully manage potential API request failures.