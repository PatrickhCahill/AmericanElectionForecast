# AmericanElectionForecast

A simple electoral forecaster. A brief methedological overview:
1. We perform a linear regression on the raw vote-share for the democrats, republicans and others in each state, in elections going back to 1976.
2. We use this to forecast our expected voteshare and uncertainty in 2024. This gives us means and uncertainties for each state.
3. We calculate each state's percentage distance from the expected national voteshare for the different candidates.
4. We then shift the states to ensure that the national voteshare matches the 538 polling average. We increase the variances to reflect this reliance on the polls assuming the polls are drawn from a distribution with variance 0.08.
5. We then have means for each of the candidates and associated variances which enables us to calculate probabilities and voteshare.
6. Finally, we run a brief simulation to draw a histogram.