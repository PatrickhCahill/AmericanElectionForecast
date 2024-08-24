<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Election Forecaster</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .chloro_container {
            display: flex;
            justify-content: space-around;
            width: 85%;
        }
        .chloro_text_container {
            display: flex;
            justify-content: space-between;
            font-family: Arial, sans-serif;
            font-size: 2em;
            margin-top: -2.5em;
        }
        .left, .right {
            display: flex;
            align-items: center;
        }
        .histo_container {
            display: flex;
            justify-content: space-around;
            width: 100%;
        }
        .name {
            margin-right: 5px;
        }
        iframe {
            width: 100%;
            border: none;
        }
        .harris {
            color: #116dc2;
        }
        .trump {
            color: #cf1313;
        }
    </style>
</head>


# 📊 American Election Forecaster - August 2024
<div class="container" style="text-align: center;"><h2><span style="color: #116dc2; text-decoration: underline; ">Kamala Harris</span> is <i><b>very</b> slightly favoured</i>  to win. If the election were held today she would have a <i>53.4%</i> chance to win the election.
<br> We expect her to win 276 Electoral College votes.</h2></div>

## Overview

Our model uses historical trends as well as making use of [538's polling averages](https://projects.fivethirtyeight.com/polls/president-general/2024/national/?ex_cid=abcpromo). We try to guess how the states will move relative to one another and then we simulate 10,000 results to calculate the probability of different candidates winning. 

---

### 1. **The Map**
The map shows the probability of each of the states voting for Kamala Harris or Donald Trump. We also forecast the vote share for each candidate in each state.
<div class="container" style="margin-top:-1.8em;">
    <iframe src="../chloropleth.html" title="Election Polls" style="height:600px"></iframe>
</div>
    <div class="chloro_text_container">
        <div class="left">
            <i><b><span class="name harris">Harris</span>
            <span class="number">  wins 53 out of 100 </i></b> </span>
        </div>
        <div class="right">
            <i><b><span class="name trump">Trump</span>
            <span class="number">  wins 47 out of 100 </i></b> </span>
        </div>
    </div>


**Key insights:**
- <u>It is an extremely close election.</u>
- Pennsylvania is the <u>key tipping point state</u>. *26%* of the time it's votes are the final votes to deliver the victor.

---

### 2. **The Uncertainty** (2014 - 2024)

<div class="histo_container">
    <iframe src="../histogram.html" title="Election Analysis" style="height:400px"></iframe>
</div>

---

## **The Summary**

| Indicator                            | (%)|
|--------------------------------------|:------------:|
| **Kamala Harris Popular Vote**        | 49.6 %  |
| **Donald Trump Popular Vote**         | 45.7%   |
| **Other Popular Vote**                | 6.1%    |
| **Chance Harris Wins the Popular Vote**   | 74%     |
---

### 📌 Takeaways:

- **Moderate Growth Ahead:** The GDP is expected to continue expanding, albeit at a slower pace.
- **Labor Market Stability:** Unemployment remains low, indicating strong job availability and potential wage growth pressure.
- **Inflation Concerns:** While inflation is cooling, it remains above target levels, impacting consumer sentiment.

For further analysis, visit [Economic Insights](https://example.com).

---

*Prepared by: The American Forecasting Group | August 2024*
