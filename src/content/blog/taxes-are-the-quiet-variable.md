---
title: "Taxes Are the Quiet Variable"
description: "The tax mechanics and optimizations that quietly shape long-term investing, account choices, and financial freedom."
pubDate: 2026-07-03
tags: ["Finance"]
seriesTitle: "Personal Finance"
seriesPart: 5
seriesTotal: 5
---
You can save aggressively, invest wisely, set up every account perfectly, and still leave six figures on the table over a career by not paying attention to taxes. Tax planning is one of the highest hourly-rate activities in personal finance, and the only one where the IRS has already done you the favor of publishing the rules. The rules are not secret. Anyone willing to read them and use what they say wins by a margin that compounds for the rest of their life.

This is the last post in the series, and it is the one I think pays back immensely for the time you spend reading it.

A note before I start. Taxes feel boring to most people because they encounter the rules only at filing time, when the year is already locked in and there is nothing to do but enter numbers into TurboTax. That is not the game. The game runs all year. Every paycheck, every investment, every account opened, every move, every windfall, every charitable gift, every retirement contribution: each is a place where the tax code is either working for you or against you, depending on whether you knew the rules going in. The game is to set the year up so April brings no unpleasant surprises.

This post is long, and a lot of it will not apply to you in any given year. I have put a one-line note under each section telling you when to read it and when to skip it. Skip freely. Come back to a section when it starts to matter. And if you only have time for three sections, read [how brackets actually work](#how-brackets-actually-work-with-a-deduction), [the 0% capital gains bracket](#the-0-long-term-capital-gains-bracket-and-tax-gain-harvesting), and [the sabbatical year](#putting-it-all-together-the-sabbatical-year): they carry the most value per minute of reading.

I am also going to define some relevant terms before I use them. If you have read a finance blog before, some of this will be review and you can move quickly. If you have not, read them slowly. Everything after depends on them.

One housekeeping note. Every number, bracket, and limit in this post is for the **2026 tax year**, the year I am writing in. The IRS adjusts almost all of these for inflation every year, so by the time you read this some figures will have nudged upward. Most years the strategies do not change; only the thresholds do. But Congress does occasionally rewrite a rule outright (this post flags a few scheduled changes already on the books, like the SALT cap reverting after 2029 and the Saver's Match arriving in 2027), and a rewritten rule can change what is optimal. So if you are reading this well after publication, treat my numbers as a snapshot: I link to the IRS's own annually-updated pages throughout so you can pull the current year's figures, and asking a capable LLM what has changed in the tax code since 2026 is a fast way to catch anything bigger before you act.

## Contents

- [How the Game Works](#how-the-game-works)
- [The Foundations](#the-foundations)
    - [The vocabulary](#the-vocabulary)
    - [How brackets actually work (with a deduction)](#how-brackets-actually-work-with-a-deduction)
    - [The three buckets of income](#the-three-buckets-of-income)
    - [How stacking works (and what pushes you from 0% to 15%)](#how-stacking-works-and-what-pushes-you-from-0-to-15)
- [Optimizations on Taxable Assets](#optimizations-on-taxable-assets)
    - [The 0% long-term capital gains bracket, and tax-gain harvesting](#the-0-long-term-capital-gains-bracket-and-tax-gain-harvesting)
    - [Asset location](#asset-location)
    - [Tax-loss harvesting (and how I got burned)](#tax-loss-harvesting-and-how-i-got-burned)
    - [Step-up in basis at death](#step-up-in-basis-at-death)
    - [Donating appreciated stock to charity (and the bunching strategy)](#donating-appreciated-stock-to-charity-and-the-bunching-strategy)
    - [Section 121 and homeowner tax mechanics](#section-121-and-homeowner-tax-mechanics)
- [Optimizations For Tax-Advantaged Accounts](#optimizations-for-tax-advantaged-accounts)
    - [The earned-income requirement for IRA contributions](#the-earned-income-requirement-for-ira-contributions)
    - [The contribution deadline lag](#the-contribution-deadline-lag)
    - [Roth versus Traditional, fully unpacked](#roth-versus-traditional-fully-unpacked)
    - [Why the employer match is always traditional](#why-the-employer-match-is-always-traditional)
    - [Required Minimum Distributions](#required-minimum-distributions)
    - [HSA tax mechanics in detail](#hsa-tax-mechanics-in-detail)
    - [The backdoor Roth](#the-backdoor-roth)
    - [The pro-rata rule](#the-pro-rata-rule)
    - [The mega backdoor Roth](#the-mega-backdoor-roth)
    - [The Roth conversion ladder](#the-roth-conversion-ladder)
- [Where You Live](#where-you-live)
- [Practical Mechanics](#practical-mechanics)
    - [Estimated quarterly taxes and the safe harbor rule](#estimated-quarterly-taxes-and-the-safe-harbor-rule)
    - [Where to find your tax forms on Fidelity](#where-to-find-your-tax-forms-on-fidelity)
    - [TurboTax and Fidelity integration](#turbotax-and-fidelity-integration)
    - [Fidelity's tax tools (and a note on using AI)](#fidelitys-tax-tools-and-a-note-on-using-ai)
- [Putting It All Together: The Sabbatical Year](#putting-it-all-together-the-sabbatical-year)
- [If It Applies to You](#if-it-applies-to-you)
- [The Takeaway](#the-takeaway)

## How the Game Works

_Read this part. It is the one idea the whole post rests on._

The tax code is not random. It is incentive engineering. Congress writes it to encourage certain behavior and discourage other behavior. Once you see what they are trying to incentivize, the specific rules stop feeling arbitrary and start feeling like a map.

The single most useful idea: **the government wants you to do productive things with your money, and they reward you for it.** Buying a piece of a real business that hires people and produces things is productive, so the code taxes the gains gently. Holding an asset for a long time instead of flipping it is the kind of patient behavior the economy needs, so the code taxes long holds more gently than quick ones. Owning a home you live in is a productive, stabilizing use of land that society wants, so the code shelters most of the gain when you sell it.

On the other side, hoarding something that produces nothing (a bar of gold in a vault) gets taxed more heavily, and earning a wage gets taxed the hardest of all. Why are wages hit the hardest? Wage income is the easiest thing for the government to tax: it is steady, your employer reports it, and it is hard to hide. Some people believe that high tax rates on wages incentivize people toward investing and away from spending. The overall pattern: the further a dollar gets from being an ordinary wage, the less it tends to be taxed.

There is also a balancing act underneath all of it. The government has to tax enough to fund the country, but not so much that people stop working, stop investing, or leave entirely. So the rates are set to keep the productive engine running: high enough to pay for things, low enough that you still want to earn the next dollar and invest it here rather than somewhere else. Almost every specific rule in this post is a consequence of that balancing act.

A few examples of the philosophy, stated plainly here:

- **Productive, long-held investments are taxed the least.** Owning stock in real businesses for more than a year gets the lowest rates in the code.
- **Unproductive assets are taxed more.** Gold, art, wine, classic cars, and other collectibles produce nothing while you hold them, so even held long-term they get a higher rate than stocks.
- **Wages are taxed the most.** Labor income is steady and hard to hide, so it carries the full rates plus the payroll taxes that fund Social Security and Medicare. (To be clear, I am not saying this is fair, or that taxing work more heavily than wealth is how it _should_ be.)
- **The country rewards using land productively.** A house you actually live in gets a large tax break when you sell it. Pure speculation on property does not get the same treatment, which discourages speculation to keep housing somewhat more affordable.
- **Holding until death is rewarded.** Assets passed to heirs get a tax reset that wipes out the gain you accumulated over a lifetime. This encourages long-term holding of productive assets, and it also spares your heirs the near-impossible task of reconstructing what you originally paid for everything decades ago.

Hold onto the one idea: the code rewards productive long-term investment and penalizes the alternatives. Every optimization in this post is just a way of arranging your life to land on the rewarded side. We will put real numbers on each of these once the vocabulary is in place.

## The Foundations

_Everything in the rest of the post leans on the four short sections here: the vocabulary, how brackets actually work, the three buckets of income, and how stacking works. They are worth reading even if you skim everything else._

### The vocabulary

_Read this if any of the terms below are new to you. If you already know what a bold term means, skim it and move on._

Tax writing is full of jargon, and most of it is simpler than it sounds. Here is everything you need for the rest of the post, in plain language. I will refer back to these.

**Gross income.** Everything you make in a year before any deductions: wages, interest, dividends, gains. The big top-line number. This is the number on your job offer if you are salaried; when someone says "I make $100k," they mean gross.

**Deduction.** An amount you get to subtract from your income before tax is calculated. A bigger deduction means less of your income is taxed.

**The standard deduction.** A flat deduction almost everyone takes, no questions asked. In 2026 it is **$16,100 for a single filer and $32,200 for a married couple filing jointly**.[^1][^2] So a single person who earned $66,100 only pays tax on $50,000 of it; the first $16,100 is shielded by the standard deduction.

**Itemizing.** Instead of the standard deduction, you can add up specific deductible expenses (mortgage interest, state taxes, charitable gifts) and subtract that total instead. You only do this if your itemized total is bigger than the standard deduction. Most people are better off with the simpler standard deduction and never itemize.

**Taxable income.** Your income after subtracting your deductions. Two kinds come out, and this is the part that trips people up. First, deductions like HSA and traditional 401(k)/IRA contributions come off no matter what. Then the standard (or itemized) deduction comes off on top of that. (Note you get HSA and traditional 401(k)/IRA deductions _and_ the standard deduction, not one or the other.) What is left is your taxable income, the number the tax rates actually apply to. Every threshold in this post is stated in taxable income unless I say otherwise.

**The 1040.** The main federal tax return form everyone files once a year. When I mention "page 1 of your 1040" or a number "landing on your 1040," that is the form I mean.

**Broker, and brokerage accounts.** A **broker** is a company licensed to buy and sell investments on your behalf; Fidelity, Schwab, and Vanguard are the big ones. A **brokerage account** is any investment account you hold with a broker: 401(k), Roth IRA, taxable brokerage, etc. What determines the tax treatment is the account _type_, so I will always be specific about which kind I mean: a **traditional retirement account** (pre-tax money, taxed on the way out), a **Roth retirement account** (post-tax money, tax-free on the way out), or a **taxable brokerage account**, the regular kind with no tax wrapper at all, where you owe tax each year on the dividends, interest, and realized gains it throws off. When I say "taxable account" or "taxable brokerage," I mean that last kind.

**Marginal tax brackets.** The federal income tax is tiered. The first slice of your taxable income is taxed at a low rate, the next slice at a higher rate, and so on. The United States uses **seven federal tax brackets: 10%, 12%, 22%, 24%, 32%, 35%, and 37%**. Critically, moving into a higher bracket only taxes the dollars _above_ that line at the higher rate, never your whole income. More on this in a moment, because the misunderstanding here is expensive and common.

**Marginal rate.** The rate on your _next_ dollar of income. If you are "in the 22% bracket," your marginal rate is 22%.

**Effective rate.** The rate you _actually_ paid across all your income: your total tax divided by your total (gross) income. It is always lower than the marginal rate, both because your early dollars were taxed in the lower brackets and because your deductions were never taxed at all.

**Ordinary income.** Income taxed at the full marginal brackets above. Wages, interest, and a few other things. This is the most heavily taxed kind of money.

**Capital gain.** The profit when you sell something for more than you paid. Buy a share for $100, sell it for $150, and the $50 is a capital gain. (If that share is inside a tax sheltered account, it is still a capital gain; it just is not a _taxable_ one. The "gain" and whether it is "taxed" are two separate questions.)

**Cost basis.** What you originally paid for an asset, including commissions. It is the number the gain is measured against. Buy a stock for $100 (that $100 is your cost basis) and sell it for $150, and your capital gain is the $50 difference. Lowering a future tax bill often comes down to legally raising your cost basis, which is why "resetting" or "stepping up" the basis comes up repeatedly below.

**Realized vs unrealized.** A gain is **unrealized** while you still hold the asset; it is just paper value, and it is not taxed. The moment you **sell**, the gain becomes **realized**, and that is the event the IRS taxes. Example: you buy a stock for $1,000 and it climbs to $4,000. While you hold it, that $3,000 gain is unrealized and you owe nothing, even though you are "up $3,000 on paper." The day you sell at $4,000, the $3,000 becomes realized and goes on your tax return. You can watch a stock triple and owe nothing until the day you sell. Keep this in mind throughout: nothing is taxed until it is realized.

**Long-term vs short-term capital gain.** If you held the asset **more than one year** before selling, the gain is **long-term** and gets favorable low tax rates. If you held it **one year or less**, it is **short-term** and gets taxed as ordinary income (the high tax rates). The one-year threshold is the single most valuable date in investing. I will abbreviate long-term capital gain as **LTCG** from here on.

**Dividends, qualified and ordinary.** A dividend is a cash payment a company sends its shareholders. A **qualified dividend** (most U.S. stock dividends, as long as you hold the stock for more than 60 days around the dividend date; the technical window is 121 days centered on it, so days held after the dividend count too) gets the favorable tax rates.[^3] An **ordinary (non-qualified) dividend** gets taxed as ordinary income. Most broad U.S. index funds pay almost entirely qualified dividends.

**The 0/15/20 rates, and preferential income.** Long-term capital gains and qualified dividends are taxed at just **0%, 15%, or 20%**, depending on your total taxable income.[^4] Most readers land at 15%. Compare that to ordinary income, where the same person might be paying 22% or 24%. This gap is the engine of most tax planning: the same dollar is taxed far less if it arrives as a long-term gain than as a wage. (Concretely, someone in the 22% wage bracket pays 15% on long-term gains, which is roughly a 30% smaller tax bill on that money.) Because I need one word for the two kinds of income that get these gentler rates, I will call long-term capital gains and qualified dividends **preferential income** from here on; everything taxed at the full brackets is ordinary income.

**Municipal bond ("muni").** A bond (loan) issued by a state or city government. The interest it pays you is free from federal income tax, and often free from your state's tax too if you live in the issuing state. That tax-free status is the whole appeal; [more on munis later](#asset-location).

**FICA.** The payroll tax that funds Social Security and Medicare. It is **7.65% taken from your paycheck and another 7.65% paid by your employer**, on your wages. The Social Security portion stops applying above a certain wage ($184,500 in 2026); the Medicare portion never stops. FICA hits wages but not investment income, which is part of why wages are the most heavily taxed kind of money.

**AGI and MAGI.** **Adjusted Gross Income** is your gross income minus a handful of specific deductions (like HSA and traditional retirement contributions). It is a number lots of other rules key off of. **Modified AGI** is AGI with a few items added back; different rules use slightly different versions, but MAGI is usually a little higher than AGI. You will see both referenced when we get to income limits.

A good way to think about the difference between AGI and taxable income: start with **gross income**, subtract the income adjustments (HSA, traditional retirement) to get **AGI**, then subtract the standard (or itemized) deduction to get **taxable income**. AGI is the bigger, earlier number, and it is what most _eligibility_ rules key off of (Roth income limits, IRA deductibility). Taxable income is the smaller, later number, and it is what the _tax brackets_ actually apply to.

That is the whole vocabulary. From here on, I use these terms freely.

### How brackets actually work (with a deduction)

The most common and expensive misunderstanding in all of personal finance is how brackets work. People think moving into a higher bracket taxes all their income at the higher rate. It does not. Only the dollars above each line get the higher rate.

Here are the 2026 brackets. (These shift with inflation every year. The IRS publishes the current year's figures; the Tax Foundation's annual ["Tax Brackets"](https://taxfoundation.org/data/all/federal/2026-tax-brackets/) summary is the easiest place to find them.)[^5]

|Rate|Single (taxable income)|Married Filing Jointly (taxable income)|
|---|---|---|
|10%|$0 – $12,400|$0 – $24,800|
|12%|$12,400 – $50,400|$24,800 – $100,800|
|22%|$50,400 – $105,700|$100,800 – $211,400|
|24%|$105,700 – $201,775|$211,400 – $403,550|
|32%|$201,775 – $256,225|$403,550 – $512,450|
|35%|$256,225 – $640,600|$512,450 – $768,700|
|37%|over $640,600|over $768,700|

Here is a real example with the standard deduction included (assuming the standard deduction beats itemizing, which it does for most people), so the gross-to-taxable step is concrete.

A single filer earns **$116,100 of gross income** in 2026 (this is the salary on their offer letter, the number they would say if you asked what they make).

- First, subtract the standard deduction: $116,100 − $16,100 = **$100,000 of taxable income**. The brackets apply to this number, not the $116,100.
- 10% on the first $12,400 = $1,240
- 12% on the next $38,000 (the income from $12,400 up to $50,400, since $50,400 − $12,400 = $38,000) = $4,560
- 22% on the next $49,600 (the income from $50,400 up to $100,000, since $100,000 − $50,400 = $49,600) = $10,912
- **Total federal income tax: $16,712**
- **Marginal rate: 22%** (the rate the next dollar would be taxed at)
- **Effective rate: 14.4%** ($16,712 ÷ $116,100 of gross income)

A quick note on that effective-rate figure: I divided the tax by the full $116,100 of gross income, because effective rate is meant to answer the plain question "what percent of everything I earned went to federal income tax." (Some people instead divide by taxable income, the $100,000 left after the standard deduction, which gives a higher number, 16.7% here.)

Notice the gap between the 22% marginal rate and the 14.4% effective rate. That gap exists because the early dollars were taxed at 10% and 12%, and the standard deduction was not taxed at all. Your marginal rate is never the rate you actually pay on average.

This is why "I do not want a raise, it will bump me into a higher bracket" is wrong. A raise that takes you from $50,400 to $55,000 of taxable income does not tax all of it at 22%. It taxes only the new $4,600 at 22%, leaving you $3,588 richer. You always net more from a raise.

### The three buckets of income

The cleanest mental model I have for tax optimization is sorting all income into three buckets. Almost every tactic in this post is about moving income from a higher-taxed bucket into a lower-taxed one.

**Bucket 1: Ordinary income.** Taxed at the full marginal brackets (10% to 37%). The most expensive bucket. What lands here: wages and salaries (your W-2), self-employment income, interest from banks and bonds, short-term capital gains, ordinary (non-qualified) dividends, REIT distributions (a REIT, or "real estate investment trust," is a company that owns income-producing property and is required to pay most of its income out to shareholders; those payouts are taxed as ordinary income), and withdrawals from traditional 401(k)s and traditional IRAs in retirement.

**Bucket 2: Long-term gains and qualified dividends.** Taxed at the favorable 0/15/20 rates, which for most people is at least a 30% smaller tax bill than Bucket 1 on the same dollar. What lands here: long-term capital gains (assets held more than a year) and qualified dividends.

**Bucket 3: Tax-free.** No federal income tax at all. What lands here: qualified Roth IRA and Roth 401(k) withdrawals, HSA withdrawals for medical expenses, municipal bond interest, and the gain on selling your home that the tax code lets you exclude (up to $250k single / $500k married, as long as it was your primary residence and you lived there long enough; this is the "Section 121" rule explained in [its own section later](#section-121-and-homeowner-tax-mechanics)).

**The difference in numbers.** Picture a married couple who make $150,000 of ordinary income, which puts their top dollars in the 22% marginal ordinary bracket and the 15% LTCG bracket. Now suppose they also have $10,000 of investment income on top of that. Here is what that same $10,000 looks like depending on which bucket it falls into:

- **Bucket 1 ($10,000 of taxable-bond interest in a taxable account):** taxed at 22%. Tax owed: $2,200. **Take-home: $7,800.**
- **Bucket 2 ($10,000 of qualified dividends in a taxable account):** taxed at 15%. Tax owed: $1,500. **Take-home: $8,500.**
- **Bucket 3 ($10,000 withdrawn from a Roth IRA):** no tax. **Take-home: $10,000.**

Same $10,000, three outcomes. Optimizing that gap between Bucket 1 and Bucket 3, compounded across decades and many income streams, is most of what the rest of this post is about. The whole game is moving income from Bucket 1 into Buckets 2 and 3 wherever the rules allow.

### How stacking works (and what pushes you from 0% to 15%)

One detail that trips people up: long-term gains do not get their own separate tax calculation in a vacuum. They **stack on top of your ordinary income**.

Picture a glass you fill from the bottom. Your ordinary income (wages, interest) pours in first and fills the lower part of the glass. Then your long-term gains pour in on top. The height where the gains land is what determines their rate.

The 0% LTCG bracket runs up to **$49,450 of taxable income for a single filer and $98,900 for a married couple in 2026**.[^4] But that ceiling is measured from the bottom of the glass, counting your ordinary income first. So your gains are taxed at 0% only to the extent they fit _under_ that ceiling after your ordinary income has already filled the bottom.

A simple version first:

- A single filer has **$30,000 of taxable income from wages** (ordinary income, fills the bottom of the glass).
- They also have **$15,000 of long-term capital gains** to realize in a taxable brokerage account.
- The 0% LTCG ceiling for a single filer is $49,450.
- Stack the gains on the wages: $30,000 + $15,000 = $45,000 total, all of it below the $49,450 ceiling.
- **All $15,000 of gain is taxed at 0%.**

Now the complete example: several kinds of income at once, the standard deduction included so it matches a real return, and enough income that the gains cross the 0% ceiling, so you can see how every piece gets taxed. A single filer has:

- **$50,000 of W-2 wages** (ordinary income)
- **$3,000 of non-qualified dividends** (ordinary income)
- **$2,000 of short-term capital gains** (ordinary income, because the holding was a year or less)
- **$5,000 of qualified dividends** (preferential, stacks on top)
- **$10,000 of long-term capital gains** (preferential, stacks on top)

Here is how it fills the glass:

- The ordinary income goes in first: $50,000 + $3,000 + $2,000 = **$55,000**.
- Subtract the standard deduction ($16,100): ordinary _taxable_ income is **$38,900**. This is what fills the bottom of the glass.
- Tax on that ordinary piece, at the regular brackets: 10% on the first $12,400 ($1,240) + 12% on the remaining $26,500 ($3,180) = **$4,420**.
- Then the preferential income stacks on top: $5,000 of qualified dividends + $10,000 of LTCG = **$15,000**, sitting on top of the $38,900.
- The 0% ceiling is $49,450, and the glass is already filled to $38,900, so there is $49,450 − $38,900 = **$10,550 of room left at 0%**. That first $10,550 of preferential income is taxed at **0%**.
- The remaining $15,000 − $10,550 = **$4,450 spills over the ceiling** and is taxed at 15%: **$668**.
- **Total federal tax: $4,420 + $668 = about $5,088.**

[Figure 1](#figure-1) draws this finished glass: ordinary income filling the bottom, preferential income stacked on top, and the ceiling slicing through the stack.

<a id="figure-1"></a>
![A diagram of a glass filling with income. Blue ordinary income fills the bottom to $38,900. Green preferential income stacks on top, with $10,550 fitting under the dashed 0% ceiling line at $49,450 and taxed at 0%, and a red slice of $4,450 above the ceiling taxed at 15% for $668.](/images/posts/finance-series/stacking-glass.png)

*Figure 1: the complete stacking example in one picture. Ordinary income pours in first and fills the glass to $38,900. The $15,000 of preferential income stacks on top: the slice under the $49,450 ceiling is taxed at 0%, and only the $4,450 that spills over the line is taxed at 15%.*

Notice what the standard deduction did here, because it is easy to miss: it was not just shaving tax off the wages. Without it, ordinary income would fill the glass to $55,000, already past the $49,450 ceiling, and the _entire_ $15,000 of preferential income would have been taxed at 15% ($2,250). By dropping the floor to $38,900, the deduction let $10,550 of gains in for free and cut the gains tax to $668. The standard deduction does double duty: it shaves your ordinary tax _and_ opens up room for gains to come in tax-free.

This example also shows the single most important thing to understand about the 0% bracket, the one people get wrong: crossing the ceiling did **not** retroactively tax all $15,000 of gains at 15%. Only the $4,450 above the line got taxed; the $10,550 below it stayed at 0%. Cross the ceiling by $1 and exactly $1 of gain is taxed at 15% (15 cents). The ceiling is not a cliff.

The lesson: more ordinary income raises the floor and pushes your preferential income up into the taxed brackets. This is exactly why low-income years (a sabbatical, a gap year) are so valuable for realizing gains, and it is the mechanism behind [tax-gain harvesting](#the-0-long-term-capital-gains-bracket-and-tax-gain-harvesting) covered below.

## Optimizations on Taxable Assets

_Skip this whole section if all your money is inside 401(k)s, IRAs, and HSAs. It only matters for a regular taxable brokerage account, because everything inside the tax-advantaged accounts is already sheltered._

The taxable brokerage account is where most freedom money ends up. It is also where the most active tax optimization happens, because every move you make in it has a tax consequence you can plan around.

### The 0% long-term capital gains bracket, and tax-gain harvesting

_Read this if you ever expect a low-income year: part-time work, a gap between jobs, a sabbatical, early retirement, parental leave._

This is the single most underused tax break in the U.S. code, and the strategy built on it: tax-gain harvesting. If your taxable income is under **$49,450 (single) or $98,900 (married filing jointly) in 2026**, your long-term capital gains rate is literally zero.

Remember that this is taxable income, which is already after the standard deduction. Add the standard deduction back and the gross-income ceiling is roughly **$65,550 (single) or $131,100 (married)**. That is a much bigger number than most people assume, and it covers a lot of real situations: time off between jobs, a sabbatical, a gap year before grad school, the first years of early retirement before Social Security starts, a year a spouse stops working, and parental leave. It also covers people who simply earn modestly but live well below their means, whether they are living with family, have big expenses covered by an employer, or just keep their spending low.

**Tax-gain harvesting** is the deliberate use of this. In a low-income year, you sell appreciated long-term holdings to realize gains at 0%, then **immediately buy the same fund right back**. The point is not to change what you own; it is to reset your cost basis upward for free. A future sale in a higher-income year is then taxed only on the growth from the new, higher basis, not all the way back to your original purchase. There is no wash-sale rule on gains (that rule only applies to losses, [covered below](#tax-loss-harvesting-and-how-i-got-burned)), so you can sell and rebuy the identical fund the same day.

In numbers. A married couple takes a year off. One spouse earns **$30,000** from a partial-year job; the other earns nothing. Years ago they bought an index fund for **$150,000** that is now worth **$280,000**, so **$130,000 of unrealized long-term gain** is sitting in it, ready to harvest.

- Wages: $30,000. The standard deduction ($32,200) is _larger_ than the wages, so their ordinary taxable income is **$0**, and the leftover **$2,200** of deduction spills over to shelter capital gains too.
- The 0% LTCG ceiling for a married couple is **$98,900** of taxable income. Because that extra $2,200 of unused deduction sits underneath the ceiling, they can actually realize **$98,900 + $2,200 = $101,100** of gain before a single dollar is taxed.
- So they sell enough to realize exactly **$101,100** of long-term gain and rebuy the same fund the same day. Their taxable income is $30,000 + $101,100 − $32,200 = **$98,900**, landing right on the ceiling. **Federal tax on the entire $101,100 gain: $0.**
- Their cost basis is now $101,100 higher, for free. Realizing that same gain in a normal 15% year would have cost about **$15,000**.

Now watch the edge, because this is where people trip. Suppose they get greedy and realize **$1,000 more** ($102,100 total). Their taxable income becomes $99,900, which is $1,000 over the $98,900 ceiling. That **$1,000, and only that $1,000, is taxed at 15% which is $150 of tax.** Going over does not retroactively tax the other $101,100; just the overage, exactly as the [stacking section](#how-stacking-works-and-what-pushes-you-from-0-to-15) showed. Still, the clean play is to fill the bracket right up to the line and stop.

A single well-timed low-income year can erase tens of thousands of dollars of future tax this way. The whole game is filling that 0% bracket as full as it will go without spilling over.

### Asset location

_Read this if you hold a mix of stocks, bonds, and REITs across both taxable and tax-advantaged accounts. Skip it if everything you own is broad stock index funds, since there is nothing to sort._

Different assets throw off different kinds of income, and different accounts shelter different kinds of income. The optimization is to put the right asset in the right account.

One caution before the table: this is **not** a ranking of what to buy, and it is not a reason to yank index funds out of your Roth. It answers a narrower question: if you hold several asset types across both taxable and tax-advantaged accounts, which ones get first claim on the limited tax sheltered space? The rule is simple: shelter the highest-tax-drag assets first. If a REIT and a stock index fund both want the last spot in your Roth, give it to the REIT.

| Asset                                                               | Why it has the tax drag it does                                                                                                                                   | Put it in tax-advantaged space (Roth/HSA/401k) first?                                                                                                                                           |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| REITs                                                               | Distributions are taxed as ordinary income (the worst bucket)                                                                                                     | **Highest priority.** Shelter these first.                                                                                                                                                      |
| Taxable bond funds                                                  | Interest is ordinary income                                                                                                                                       | **High priority** to shelter, but in a traditional 401(k)/IRA rather than a Roth (see the note under the table).                                                                                |
| Broad U.S. stock index funds (VTI, FSKAX)                           | Low: mostly qualified dividends, few capital-gain distributions                                                                                                   | Either place is fine. Happy in taxable _or_ Roth.                                                                                                                                               |
| International stock funds                                           | Mostly qualified dividends, plus a foreign tax credit (a credit for taxes the fund already paid to foreign governments) you can only collect in a taxable account | Slight edge to **taxable**, so you do not waste the credit.                                                                                                                                     |
| Municipal bond funds (VTEB, MUB)                                    | Interest is already federal-tax-free                                                                                                                              | **Taxable.** Sheltering them wastes a break you already have.                                                                                                                                   |

So the priority order for your limited Roth/HSA/401(k) room is roughly: REITs and taxable bonds first, then broad stock funds if there is room left, and never munis (their break is wasted inside a Roth). International funds lean slightly toward taxable so the foreign tax credit is not lost.

**Taxable bonds belong in a traditional (pre-tax) account, not a Roth**. Roth space is the most valuable real estate you own, because everything that grows in it is tax-free forever, so you want your highest-growth assets (stocks) filling it. Bonds throw off heavily-taxed interest but grow slowly, so they are best tucked into traditional space, where you are only deferring tax on modest growth. Parking low-return bonds in a Roth wastes tax-free-growth room on something that barely grows. Put simply: shelter bonds from tax, but do it in the traditional account and save the Roth for stocks.

**Asset location in numbers.** Say you have $40,000 split between a Roth IRA ($20,000) and a taxable brokerage ($20,000), and you want $20,000 of stock and $20,000 of REITs. (REITs trade like stocks and you buy them the same way, but for tax purposes their payouts behave like ordinary income, which is the whole reason they want to live in the Roth.) A married couple in the 24% bracket:

- **Bad arrangement (REITs in taxable, stock in Roth):**

    - REITs in taxable yield ~4% ($800/year) as ordinary income, taxed at 24% (minus a small break called the QBI deduction, which lets you knock 20% off REIT dividend income before tax): ~$154/year
    - Stock in Roth: $0 tax
    - **Total annual tax drag: ~$154**
- **Good arrangement (REITs in Roth, stock in taxable):**

    - REITs in Roth: $0 tax
    - Stock in taxable yields ~2% ($400/year) as qualified dividends at 15%: $60
    - **Total annual tax drag: ~$60**

Same holdings, $94 saved every year, just by swapping which account holds what. Compounded at 7% over 30 years, that recurring $94/year grows to roughly $9,500 (the future value of a $94 yearly deposit at 7% for 30 years). Scale up the dollars and the savings scale with them.

A specific case worth knowing: **the tax-equivalent yield of municipal bonds.** Munis (defined in the vocabulary; a muni is a state or city bond whose interest is federal-tax-free) pay lower headline yields than taxable bonds, but because the interest is untaxed, the comparison is not apples to apples. The break-even formula:

> Tax-equivalent yield = muni yield ÷ (1 − your marginal tax rate)

A muni paying 3.5% to someone in the 32% bracket is equivalent to a taxable bond paying 3.5% ÷ (1 − 0.32) = **5.15%**. So if regular bonds are yielding less than 5.15%, the muni wins for that person. For someone in the 22% bracket, the break-even is only 4.49%, so the muni usually does not win. The higher your bracket, the better munis look.

### Tax-loss harvesting (and how I got burned)

_Read this if you have a taxable brokerage account with positions that are down. Skip it if everything you hold is up, or if all your money is in tax-advantaged accounts._

Start with the core mechanic, because it is simpler than the name. When you sell something for less than you paid, you have a **capital loss**. Losses and gains cancel each other out, dollar for dollar, in the same year. If you realize $20,000 of gains and $20,000 of losses, they net to zero and you owe nothing on them.

Here is the part worth internalizing. If your losses are bigger than your gains, you can use up to **$3,000 of the leftover loss against your ordinary income** (Bucket 1, your highest-taxed money), and carry anything beyond that forward to future years forever.[^3] Because ordinary income is taxed at a higher rate than long-term gains, a dollar of loss applied against ordinary income saves you _more_ than a dollar applied against a long-term gain. That makes the $3,000-against-income allowance the most valuable slice of any loss.

(The $3,000 limit has been frozen since 1978. If it had kept up with inflation it would be over $14,000 today. It has not, so $3,000 it is.)

Tax-loss harvesting is the deliberate version: you sell a losing position to bank the loss, then immediately buy something similar (not identical, for reasons below) so you stay invested. Your portfolio barely changes, but you have captured a loss you can use.

**A worked example, with cleaner numbers so the moving parts stay separate.** A married couple in the 24% bracket (15% LTCG) had a good year and **realized $30,000 of long-term gains** (they sold an appreciated holding, and some funds distributed gains). They also hold a position currently **down $18,000** that they bought near an old peak.

- They sell the loser, realizing an **$18,000 loss**.
- That $18,000 loss cancels $18,000 of the $30,000 in gains. Their net taxable gain drops to **$12,000**.
- Tax saved this year: the $18,000 of gains that got canceled would have been taxed at 15%, so they saved **$2,700**.
- They immediately rebuy similar (not identical) exposure (sell VTI, buy SCHB or ITOT) so they stay in the market.
- (A natural question: can they _also_ take $3,000 against their ordinary income this year? Not in this case. Losses always cancel gains **first**, dollar for dollar; the $3,000-against-income allowance only kicks in on loss left over _after_ all your gains are wiped out. Their $18,000 loss was smaller than their $30,000 of gains, so the whole loss got used canceling gains, with nothing left to point at income. You get both the gain-offset and the $3,000-against-income only when your losses exceed your gains, covered in the next example.)

Now the more valuable version, when you have a loss and _no_ gains to offset:

- Say you realize an $18,000 loss and have no gains this year.
- First, $3,000 of it goes against your ordinary income. At the 24% rate, that saves **$720**, which is more than the $450 it would have saved against a 15% gain. That is why pointing the loss at ordinary income first is the better use.
- The remaining $15,000 of loss does not vanish. It **carries forward** to future years. (And to answer the obvious follow-up: if next year you happen to realize $15,000 of gains, that carried-forward loss gets spent canceling those gains first, so you would _not_ also get the $3,000-against-income that year. Same ordering rule, every year.)

How does the carryforward actually work? Each year, your leftover losses first cancel any new realized gains, then up to $3,000 of whatever is left comes off your ordinary income, and anything still remaining rolls to the next year. So that $15,000 might play out as $3,000 against income this year, $3,000 next year, and so on, or get used up faster if you realize gains it can offset. The losses last indefinitely until used. And yes, your broker tracks this for you: Fidelity (and the others) carry your unused loss forward on your account records and report it on the year-end tax documents, and tax software picks it up automatically. You should still keep an eye on it, but you are not doing the bookkeeping by hand.

**The catch: the wash-sale rule.** If you sell at a loss and buy back the "substantially identical" security within 30 days _before or after_ the sale, the IRS disallows that loss for the current year.[^3] You do not lose it permanently; it gets added to the cost basis of the replacement shares, so you recover the benefit when you eventually sell those. But you cannot use it _now_.

A concrete example, since the 61-day window confuses everyone:

- On March 1 you buy 100 shares of a fund at $50 ($5,000).
- By June 1 it has dropped to $40. You sell all 100 for $4,000, realizing a **$1,000 loss** you are hoping to use this year.
- But on June 20 (19 days later, inside the 30-day after-window) your automatic paycheck investment buys 100 shares of the same fund at $41.
- That purchase triggers the wash-sale rule. The $1,000 loss is **disallowed for this year.**
- Instead, the disallowed $1,000 is added to the cost basis of the new shares: their basis becomes $4,100 (what you paid) + $1,000 (the disallowed loss) = **$5,100**. So when you eventually sell those shares, you are taxed on $1,000 less of gain. The benefit is deferred, not destroyed.
- The window is symmetric: a purchase 30 days _before_ the sale triggers it just as a purchase 30 days _after_ does. That is the full 61-day danger zone (30 before + the sale day + 30 after).

Two things about "substantially identical" worth saying out loud. First, the IRS has deliberately never defined it precisely for funds. That vagueness is not an accident; a bright-line rule would be easy to game, so they leave it fuzzy and decide disputes case by case. Second, when a term is vague like this, it rarely breaks in the taxpayer's favor in an audit, so do not push the edge. Swapping VTI (Vanguard Total Market) for SCHB (Schwab Broad Market) or ITOT (iShares Total Market) is universally considered safe: different companies, different underlying indexes, equivalent exposure. Swapping two different S&P 500 funds (VOO for SPY) is a grayer area most CPAs would not risk.

Now, how I got burned. First, a quick definition of the word **lot**, because it matters here: every time you buy shares, that specific purchase (this many shares, on this date, at this cost) is a tax lot. Buy the same fund twelve times in a year and you own twelve lots, each with its own purchase date and cost basis.

I was dollar-cost averaging into a fund in my taxable brokerage, a chunk every paycheck, so after a year I had about twenty lots at twenty different prices. Then I sold some shares to rebalance. I assumed I was "selling gains" because the position was up overall. But the IRS does not look at your position overall; it looks at the individual lots you sold. Some of the lots I sold had a higher cost basis than the current price, so those specific sales were losses, not gains. And because I had bought more of the same fund almost immediately after, those purchases fell inside the 61-day window and triggered the wash-sale rule on the loss lots. Fidelity flagged it with a little "W" on the position. (Fidelity shows you the "W" _after_ the fact; in my experience it does not warn you before a purchase that you are about to create a wash sale. You have to catch it yourself.)

What does getting caught actually cost you? Honestly, in my case, not much. The disallowed loss was not deleted; it rolled into the cost basis of the replacement shares, so I will get the benefit when I eventually sell them. The real cost was bookkeeping confusion and the minor loss of the deduction in the current year. So I want to be measured here: **a wash sale is usually not a big deal, because you still get the tax benefit eventually.** It only stings if you were counting on a specific harvested loss to offset a big gain _this_ year and the disallowance leaves you with a surprise bill in April. Worth understanding, not worth losing sleep over.

The fix has two parts.

First, set your cost basis method to **Specific Identification (SpecID)**, which lets you choose exactly which lots you sell instead of letting the broker pick for you. On Fidelity: Accounts → your taxable brokerage → Positions → click the security → Cost Basis tab → change from "Average Cost" or "First In First Out" to **Specific Identification**. After that, every sell order shows a "Specify Lots" button, and you pick the exact lots (and can avoid selling ones sitting at a loss you do not want). You have to set this **at or before the sale**; you usually cannot fix it after the order fills.

Second, **pause any automatic recurring purchases of that fund for 31 days around a harvested loss**, or buy the replacement from a different fund family, so your own automatic investing does not trip the rule.

A note on doing this well, since it is fiddly: this is exactly the kind of thing where pulling your year-end statements into a spreadsheet, or handing them to an AI assistant to scan for wash-sale flags and lot-level losses, can save you an evening of squinting. You would not want anything auto-executing trades for you, but using software to _read_ your positions and tell you what is optimal to sell is fair game and free.

### Step-up in basis at death

_Read this if you expect to hold highly appreciated assets for the very long term, or are thinking about what you leave behind. It is one of the strongest arguments for "buy and hold forever."_

This is quietly one of the largest tax breaks in the whole code.

When you die, the assets you leave behind get their cost basis **reset to the market value on your date of death**. Every dollar of unrealized gain you accumulated over your lifetime simply disappears for tax purposes. Your heirs can sell the next day and owe nothing, because their basis equals the current price.

**In numbers.** You bought an index fund 30 years ago for $50,000. At your death it is worth $400,000.

- If you sold the day before you died: tax on $350,000 of gain at 15% = **$52,500.**
- If your heirs inherit and sell the next day: their basis is $400,000, the gain is $0, **tax owed is $0.**
- The entire $350,000 of built-up gain evaporates.

One practical warning that makes or breaks this: **the step-up flows through whatever beneficiary setup you have in place.** Make sure your accounts have named beneficiaries ([Post 4](/blog/the-fidelity-setup#step-7-set-your-beneficiaries-on-every-account-right-now) covered exactly how to set these on Fidelity). Without beneficiaries, the assets can get tangled in probate, which is slow, public, and expensive, and undercuts the clean hand-off the step-up is supposed to give your heirs.

Now, the strategic implication, and I want to be careful here because it cuts against common wisdom. The usual advice is to "sell your winners" in retirement so you are not forced to liquidate during a downturn, which is reasonable. But the step-up adds a wrinkle: your _biggest, oldest winners_, the ones with the most built-up gain, are the most valuable to hold until death, because that is where the tax forgiveness is largest. So the refined version is: spend down cash, bonds, and your traditional 401(k) (taxed as ordinary income anyway) first; trim moderate winners as needed for rebalancing and to avoid forced downturn sales; but let your most-appreciated positions ride untouched if you can afford to, because death erases their tax bill entirely. It is not "never sell winners," it is "hold the biggest winners the longest." (To be clear, this whole strategy applies only to assets in a _taxable brokerage account_. The step-up is about resetting cost basis, and cost basis only matters outside retirement accounts. Traditional 401(k)/IRA dollars are taxed as ordinary income to your heirs regardless, and Roth dollars are already tax-free, so neither gets, or needs, a step-up. More on inherited retirement accounts in the [inherited-account note](#if-it-applies-to-you) near the end.)

A note on the estate tax, since people worry about it. The **estate tax** is a separate federal tax on the total value of a very large estate at death (think of it as a tax on the wealth itself as it passes to heirs, distinct from income tax). It only applies above an exemption of **$15 million per person in 2026** (so $30 million for a married couple with basic planning).[^1] Below that, no estate tax, and the step-up still applies. Almost no one reading this is affected by the estate tax. For the rare estate that is above the line, there are trust structures that can reduce or avoid it, but that is genuine high-net-worth estate-planning territory and the place to handle it is with an estate attorney, not this blog post. For everyone else, the step-up benefit applies regardless of estate size.

### Donating appreciated stock to charity (and the bunching strategy)

_Read this if you give a meaningful amount to charity, or expect to. Skip it if you do not._

If you give to charity, donating **appreciated stock you have held more than a year** is one of the cleanest moves in the code. It does three good things at once: you skip the capital gains tax you would have owed on a sale, you deduct the full market value (if you itemize), and the charity gets more than it otherwise would have.

**Donating stock vs. cash.** You hold stock bought for $1,000, now worth $10,000, and want to support a charity.

- **Path A, sell then donate the cash:** selling triggers $1,350 of tax on the $9,000 gain (15%). You have $8,650 left to give. The charity gets $8,650.
- **Path B, donate the shares directly:** no sale, so no capital gains tax. The charity receives the stock and sells it tax-free (charities pay no capital gains tax), so it gets the full **$10,000**. You also deduct the full $10,000 if you itemize.

Path B gets the charity $1,350 more _and_ gives you a bigger deduction. Same starting point, better on both ends. If you do this through a donor-advised fund (the "Giving Account" covered in [Post 4](/blog/the-fidelity-setup#optional-open-a-donor-advised-fund)), note the DAF charges a small administrative fee (around 0.60% a year), worth knowing but small relative to the tax saved.

**The catch: the deduction only helps if you itemize**, and most people do not, because the standard deduction ($16,100 single / $32,200 married in 2026) is larger than their itemizable expenses. If you take the standard deduction, a charitable gift gives you no additional tax break at all.

**The bunching strategy** is the workaround, and it is worth real money. Instead of giving a steady amount every year and never clearing the standard deduction, you bunch several years of giving into one year, itemize big in that year, and take the standard deduction in the off years. I have a friend, Colin, who does exactly this for his church: he gives two years' worth in a single year so that year's giving clears the itemizing threshold. Then he takes the standard deduction the next year. Shoutout Colin, one of the few who actually ran the math.

A donor-advised fund makes this clean: you put the bunched lump sum into the DAF in the bunch year (that is the year you get the deduction), and then you can grant the money out to actual charities on whatever schedule you like afterward. You do not have to give it all away the same year; the DAF holds it and you direct the gifts over time. The deduction is locked in when the money goes _into_ the DAF.

**In numbers.** Suppose you give $10,000 a year to charity, and your other itemized deductions (mortgage interest, state taxes) total $20,000. The standard deduction is $32,200 for a married couple.

- **Without bunching:** each year your itemized total is $20,000 + $10,000 = $30,000, which is _less_ than the $32,200 standard deduction. So you take the standard deduction and your $10,000 gift produces **$0 of extra tax benefit**, every year.
- **With bunching (give $30,000 every third year through a DAF):** in the bunch year your itemized total is $20,000 + $30,000 = $50,000. That is $17,800 above the standard deduction, and at the 24% rate it saves about **$4,272** in that year. The two off years you give nothing new and take the standard deduction, granting the bunched money out of the DAF to your charities as you go.

Same total given to charity, but the bunching pulled real deduction value out of money that otherwise did nothing for your taxes.

### Section 121 and homeowner tax mechanics

_Read this if you own a home or plan to. Skip it if you rent and expect to keep renting (though see the renter's note at the end)._

If you sell your **primary residence**, up to **$250,000 of the gain (single) or $500,000 (married filing jointly)** is completely tax-free, as long as you owned and lived in the place for at least **2 of the last 5 years**.[^6] This is Section 121 of the tax code, and it is the productive-use-of-land incentive from the opening section made concrete: the country wants people settling into homes they live in (and wants to discourage pure speculation on housing), so it shelters the gain.

**In numbers.** A married couple bought a house in 2017 and sells in 2027:

- Cost basis (purchase price plus improvements): $450,000
- Sale price: $800,000
- Gain: **$350,000**
- Section 121 exclusion (married): $500,000, which fully covers the $350,000 gain
- **Taxable gain: $0. Federal tax: $0.**

Without Section 121, that $350,000 gain at 15% would have cost $52,500 in federal tax alone. If they had sold for $1,100,000 (a $650,000 gain), Section 121 still shelters $500,000 of it, leaving only $150,000 taxable, saving roughly $75,000 versus selling a property that did not qualify.

The exclusion resets each time you sell a qualifying primary residence and buy another, so over a lifetime you can shelter a great deal of gain. The "2 of the last 5 years" test does not require living there continuously, just 24 months total out of the 60 before the sale.

Two related homeowner items, both of which feed the itemize-or-not question:

- **Mortgage interest deduction.** Interest on up to $750,000 of mortgage debt is deductible if you itemize. Early in a $500,000 mortgage at 6%, that is roughly $30,000 of interest in year one, which can push you over the standard deduction. (I would add: do not go chasing a giant mortgage _for_ the deduction. Paying $30,000 in interest to deduct $30,000 is paying a dollar to save a quarter.)
- **The SALT cap.** "SALT" is state and local taxes: your state income tax plus your local property tax, added together. Those are deductible on your _federal_ return, but only up to a cap. The cap was $10,000 from 2017 on, and the [One Big Beautiful Bill Act of 2025](https://www.congress.gov/bill/119th-congress/house-bill/1) temporarily raised it to **$40,000 for 2025 through 2029**, with phase-outs for high earners.[^7] It matters most in high-tax states.

A quick word on the state-tax question that SALT raises, because it confuses people: your state calculates its own income tax on its own version of taxable income, separate from the federal calculation (most states start from your federal AGI and then apply their own deductions and rates). The SALT deduction is the federal government letting you deduct _the taxes you paid to your state and locality_ when computing your _federal_ taxable income.

A quick example: a married couple in a high-tax state pays $18,000 in state income tax and $9,000 in property tax, totaling $27,000 of SALT. Under the old $10,000 cap they could deduct only $10,000 of that on their federal return. Under the temporary $40,000 cap, they can deduct the full $27,000. That extra $17,000 of deductible SALT is often the very thing that pushes a household over the standard deduction and into itemizing, which then makes their mortgage interest and charitable gifts start counting too.

As for why it is temporary: raising the cap is expensive for the federal budget, so Congress wrote the $40,000 figure to last only from 2025 through 2029 (and it phases out for high earners) to hold down the projected cost. Unless a future Congress extends it, the cap is scheduled to snap back toward the old $10,000 level in 2030. So treat the bigger deduction as a window that may close rather than a permanent fixture: if you have any flexibility on _when_ you incur large deductible expenses, the years through 2029 are the favorable ones to bunch them into.

Whether you itemize comes down to whether mortgage interest + SALT + charitable gifts + a few other items beats your standard deduction. When you are close, the [bunching strategy above](#donating-appreciated-stock-to-charity-and-the-bunching-strategy) is the lever that gets you over.

A note for renters: a handful of states (Indiana, for instance) offer a state-level renter's deduction on your _state_ return. It will not show up on your federal taxes and the amounts are usually modest, but if you rent, it is worth thirty seconds checking whether your state has one.

## Optimizations For Tax-Advantaged Accounts

_This section applies to almost everyone with a retirement account or HSA. Read the parts that match your situation._

These accounts already do most of the work by sheltering income from tax. The optimizations are about getting more dollars in, getting them onto the right side (Roth vs. traditional), and pulling them out efficiently later.

### The earned-income requirement for IRA contributions

_Read this if you are in or approaching a year with little or no job income, or if one spouse does not work._

You can only contribute to a Roth or Traditional IRA if you have **earned income** that year: wages, salary, tips, professional fees, or self-employment income from a business you actively work in.[^8] Investment income does not count. Neither does Social Security, rental income, unemployment, alimony, or child support.

The limit is the lesser of **$7,500 (2026, under age 50)** or your earned income for the year:

- Earn $50,000 from a job: you can contribute the full $7,500.
- Earn $5,000 from part-time work: you can contribute $5,000.
- Have $200,000 of capital gains but no earned income: you can contribute $0.
- Fully retired and living off withdrawals from a traditional retirement account: that withdrawal is taxable income, but it is not _earned_ income, so your IRA contribution limit is still $0.

The exception is the **spousal IRA**: a non-working spouse can contribute based on the _working_ spouse's earned income, if the couple files jointly. So a one-earner couple can still fund two IRAs, $7,500 each.

This matters most in sabbatical and gap years. A full calendar year with zero earned income means you cannot contribute to your own IRA that year (though Roth conversions, covered below, are a separate thing you still can do). Plan around it: load up in your last working year, and use the spousal route if you are married.

### The contribution deadline lag

_Quick one, useful for everyone. Read it._

- **IRA contributions** for a tax year can be made until **April 15 of the following year**. You can still make 2026 Roth contributions up to April 15, 2027.[^8]
- **HSA contributions** follow the same April 15 rule.[^9]
- **401(k) contributions** are calendar-year only; they must run through payroll by December 31.

So if you are doing your taxes in March and realize you had room for more Roth or HSA, you can still fix it. The 401(k) ship, though, has sailed at year-end.

### Roth versus Traditional, fully unpacked

_This is the single most consequential account decision most people make, and almost everyone gets at least part of it wrong._

First, the two words, since everything below leans on them. A **Roth** contribution is made with money you have _already paid tax on_ (post-tax dollars); it then grows and comes out completely tax-free. A **Traditional** contribution is made with _pre-tax_ dollars (you deduct it now, so you skip tax today), and then every dollar is taxed as ordinary income when you withdraw it in retirement. Roth = pay tax now, never again. Traditional = skip tax now, pay later.

The basic question is which of those is the better deal for you, and it turns on one thing:

- If your tax rate is **the same** now and in retirement, the two are mathematically identical, as [Post 2](/blog/where-each-dollar-goes#step-4-max-out-your-roth-ira) showed.
- If your future rate will be **higher** than today's, **Roth wins** (you lock in today's lower rate).
- If your future rate will be **lower** than today's, **Traditional wins** (you skip tax now at the high rate and pay later at the low rate).
- The one wrinkle, covered below, is that a Roth can effectively shelter more money under the same contribution cap, which tilts things toward Roth a little beyond the pure rate comparison.

So it reduces to: will your tax rate in retirement be higher or lower than it is today? Three things drive that:

- **Career trajectory.** Most incomes peak in the 50s and 60s, then drop in retirement, which argues for Traditional in peak years and Roth in low years.
- **Tax-law risk.** Federal rates are historically low right now (the top rate was 70% in 1980, 91% in 1960). They could be higher in 30 years. Roth locks in today's rate and removes that risk.
- **Retirement spending.** Plan to live large off a big portfolio? Your retirement income (and rate) will be high, favoring Roth. Plan to live modestly? Traditional wins on the math.

One subtlety on "future rate," since it comes up: in retirement your withdrawals from a Traditional account are **ordinary income**, taxed at the full brackets, not the friendly 0/15/20 rates. Qualified dividends and long-term gains inside a taxable account keep their favorable rates, but money coming out of a Traditional 401(k) or IRA does not. That is part of why a very large Traditional balance can be a problem (see [RMDs below](#required-minimum-distributions)).

Here is a worked example of those withdrawals being taxed. A retired couple pulls **$80,000 out of a Traditional IRA** as their income for the year, and takes the standard deduction:

- $80,000 minus the $32,200 standard deduction = $47,800 of taxable income
- Tax at the brackets: 10% on the first $24,800 ($2,480) + 12% on the remaining $23,000 ($2,760) = **about $5,240**
- Effective rate: $5,240 divided by the $80,000 they pulled out = **about 6.6%** (using gross income as the denominator)

If that same $80,000 had come from a **Roth**, the tax would be **$0**, because Roth withdrawals are tax-free. Whether the Roth was worth it depends entirely on the rate you paid on the way in: if you contributed those dollars while in the 22% or 24% bracket during your working years, you paid more tax up front than the roughly 6.6% the Traditional withdrawal costs here, and Traditional would have won. If you contributed them in a low-bracket year, Roth wins. That is the whole trade in one example.

**For most readers in their 20s through 40s, Roth is the better default**, unless you are currently in the top brackets (32%+) and confident you will be lower later.

**The hidden Roth advantage most people miss.** Both accounts share the same $7,500 cap, but the dollars are not equal. A Roth dollar is fully yours. A Traditional dollar still owes tax someday.

- $7,500 in a Traditional IRA, later taxed at 22%, is really worth $7,500 times (1 minus 0.22) = **$5,850** of spendable money.
- $7,500 in a Roth is worth the full **$7,500**.

So maxing the Roth quietly stuffs _more real wealth_ under the same contribution cap. That ~$1,650/year difference, compounded 30 years at 7%, is about **$156,000** of extra real retirement value from the same stream of contributions.

**Roth withdrawal flexibility, and the question of how the IRS sorts it.** Your Roth **IRA** contributions can be pulled out anytime, tax-free and penalty-free, because you already paid tax on them. (The "IRA" in that sentence matters: this flexibility belongs to the Roth IRA specifically, not the Roth 401(k), for the pro-rata reason a few paragraphs down.) Your **earnings** (everything the account made on top of what you put in: capital gains, dividends, and interest) are stricter: to pull earnings tax-free, the account must be 5+ years old _and_ you must be 59.5+ (or hit a specific exception like a first-home purchase).

People ask how the IRS knows which is which when you withdraw, given that contributions and gains are all mixed together in the account. The answer is an ordering rule, not a tracing rule: the IRS treats every Roth IRA withdrawal as coming out of your **total lifetime contributions first**, then converted amounts, then earnings last.[^8] It does not matter which specific stock inside the account went up, and there is no "first $10,000 is principal" rule about a particular holding. If you contributed $30,000 over the years and the account is now worth $50,000, the first $30,000 you ever withdraw is all treated as contributions (tax- and penalty-free), and only withdrawals beyond that dip into the $20,000 of earnings. So you can reach your contributions without triggering anything; you only hit the earnings rules once you have pulled out more than you ever put in.

That makes a Roth IRA a quiet emergency-fund-of-last-resort. But be careful: pulling contributions is almost always a bad idea.

**The cost of pulling $7,500 early:**

- Pull $7,500 at age 30. You can never re-contribute that year; the slot is gone for good.
- Foregone growth at 7% from age 30 to age 60: about **$57,000**.
- The flexibility cost you roughly 7.5x what you withdrew.

Treat it as a genuine last resort, not a plan.

**The Roth 401(k) does not get the friendly ordering rules, and there is a move that fixes it.** Almost everyone assumes the Roth 401(k) works like the Roth IRA here. It does not. Early withdrawals from a **Roth 401(k)** are **pro rata**: every non-qualified withdrawal is treated as a proportional blend of your contributions and your earnings, and you cannot cherry-pick the contributions.[^10] The contributions slice comes back tax-free, but the earnings slice is taxed as ordinary income plus the 10% penalty. (This is the same proportional logic as the pro-rata rule that haunts backdoor Roths, [covered below](#the-pro-rata-rule), just applied to withdrawals instead of conversions.)

**In numbers.** Your Roth 401(k) holds $40,000: $30,000 of contributions and $10,000 of growth. You are 40 and withdraw $10,000.

- From a Roth **IRA**, the ordering rule says all $10,000 counts as contributions. Tax: **$0**. Penalty: **$0**.
- From the Roth **401(k)**, the withdrawal is pro rata: 25% of the account is earnings, so $2,500 of your $10,000 is treated as earnings. In the 22% bracket that is $550 of income tax plus a $250 penalty, **$800 gone**, and you have also permanently pulled $2,500 of earnings out of the tax-free wrapper.

**The fix is the rollover.** Once you leave the employer, roll the Roth 401(k) into your Roth IRA (the portability move from [Post 2](/blog/where-each-dollar-goes#step-6-retirement-accounts-beyond-the-match-and-taxable-brokerage)). From that point on, the contributions you made (but not the growth) to the Roth 401(k) are treated as regular Roth IRA contributions, governed by the friendly ordering rules: withdrawable tax-free and penalty-free at any age, while the earnings stay behind compounding.[^10] Pro-rata money goes in; contributions-first money comes out. For anyone who changes jobs every few years, this quietly makes a career of Roth 401(k) contributions far more liquid than they look, without the yearly tax drag the same dollars would carry in a taxable brokerage. And once you are 59.5 and the five-year clock is met, the whole distinction dissolves, because every withdrawal becomes qualified and tax-free.

Three pieces of fine print. First, only the contributions become accessible; the earnings stay locked behind the usual rules, and the five-year clock that governs when earnings turn tax-free is your Roth IRA's own clock, which does not inherit the 401(k)'s (one more reason to open a Roth IRA early and let it season). Second, save the final 1099-R from the rollover: box 5 shows exactly how much contribution basis moved over, and that number is your proof of what you can withdraw free. Third, the warning above still applies in full: Roth space you withdraw never comes back, so treat this as optionality you are glad to have, not a plan you execute.

One more note, because I get asked this a lot (mainly by my Indian friend Akshay). **If you might leave the U.S. someday, the Roth-vs-Traditional choice gets more complicated, and it is worth thinking about before you commit.** Friends on work visas who plan to move back to their home countries eventually face a real question: the right answer depends on the tax treaty between the U.S. and that country, how that country taxes Roth withdrawals (some do not honor the U.S. tax-free treatment), and the rules for withdrawing as a non-resident. There is no single answer, and it is exactly the kind of situation worth one conversation with a cross-border tax professional before deciding how much to lean Roth.

That said, here is the encouraging flip side. One of the genuinely great advantages of being an immigrant working in the U.S. is that, with a Social Security number, you get full access to the U.S. investment market: the same low-cost index funds, the same tax-advantaged accounts, the same long-run returns, which are as good as you will find anywhere in the world. If you are an immigrant, I would strongly encourage you to research the tax relationship between your home country and the U.S. and make the most of the opportunity to invest in the U.S. market while you have access to it. The complexity is worth navigating, not avoiding.

### Why the employer match is always traditional

_Short, and worth reading if you get a 401(k) match (most people with a 401(k) do)._

Even if you put your own contributions on the Roth side of your 401(k), **the employer match almost always lands on the traditional (pre-tax) side.** The reason is the employer's accounting. They deduct the match as a pre-tax business expense. To put it on the Roth side, they would have to "gross it up," meaning add extra money to cover the income tax you would owe on it (since Roth money is post-tax, they would have to hand you enough to pay the tax and still land your intended match). They do not do that, so the match goes in pre-tax and will be taxed as ordinary income when you withdraw it.

Some plans let you convert it to Roth later through an **in-plan Roth conversion** (taxable in the year you do it). For young workers in low brackets this is often worth doing yearly; for high earners it usually is not, and it is especially not worth it if you have been at the same employer many years and the accumulated match is large enough that converting it all at once would bump you into a higher bracket.

When you change jobs, I would roll the _traditional_ part of an old 401(k) into your _new_ employer's 401(k) rather than into a Traditional IRA. This is because keeping pre-tax money inside a 401(k) shell keeps the backdoor-Roth path (described [below](#the-backdoor-roth)) clear of the pro-rata rule. The Roth portion of an old 401(k) I roll into a Roth IRA, which also upgrades its withdrawal treatment from pro rata to [contributions-first](#roth-versus-traditional-fully-unpacked). (Traditional to traditional, Roth to Roth; you keep the two sides separated so neither gets taxed in the move.)

### Required Minimum Distributions

_Read this if you will have a large traditional (pre-tax) balance in your 70s. Skip it if you are decades away and mostly in Roth._

Starting at **age 73 (rising to 75 by 2033 under [SECURE 2.0](https://www.congress.gov/bill/117th-congress/house-bill/2617))**, the IRS forces you to withdraw a minimum amount from traditional 401(k)s and IRAs every year, whether you need it or not.[^11] Why does this rule exist? Because the traditional account was a _deal_: the government let you skip tax on that money for decades while it grew. RMDs are how it finally collects. It does not want to wait forever, and without RMDs a wealthy retiree could leave a giant pre-tax balance untouched, hand it to heirs, and keep the government's deferred tax pushed down the line indefinitely. So at a certain age it requires you to start pulling the money out (and paying the ordinary-income tax on it).

The amount is your prior-year-end balance divided by a "life expectancy factor" from an IRS table. The **life expectancy factor** shrinks as you age (it is roughly how many more years the IRS figures the money needs to last), and because you are dividing by a smaller number each year, the _required withdrawal_ grows as a percentage of the balance over time.

Key points:

- Roth IRAs have no RMD during the original owner's life. The balance can grow tax-free indefinitely.
- Roth 401(k)s used to have RMDs but no longer do (SECURE 2.0 removed them in 2024).[^11] This is a clean example of how tax law shifts over time; you cannot know what the rules will be in 30 years.
- RMDs do not apply to your _current_ employer's 401(k) while you are still working there (unless you own more than 5% of the company).

**In numbers.** A $2,000,000 traditional IRA, showing the actual IRS factors (from the Uniform Lifetime Table, which you can find in [IRS Publication 590-B](https://www.irs.gov/publications/p590b) or via Fidelity's [RMD calculator](https://www.fidelity.com/retirement-ira/rmd)):

- Age 73: factor **26.5**, so $2,000,000 / 26.5 = **$75,500** required (about 3.8% of the balance)
- Age 80: factor **20.2**, so balance / 20.2 = about **5%** of the balance
- Age 90: factor **12.2**, so balance / 12.2 = about **8.2%** of the balance
- Age 100: factor **6.4**, so balance / 6.4 = about **15.6%** of the balance

If the balance keeps growing, the forced withdrawals climb with it, both because the factor shrinks and because the balance may be larger. By their 90s, someone with a large traditional balance can be pushed into a high bracket on income they neither need nor want.

Two questions people always ask. **What balance goes in the numerator?** Your account value as of **December 31 of the _prior_ year**, divided by this year's factor. **And what happens if you skip it?** The IRS charges an excise tax of **25% of the amount you failed to withdraw** (mercifully cut down from a brutal 50% by SECURE 2.0), and that drops to **10% if you fix the shortfall promptly**, generally within a two-year correction window, by taking the missed distribution and filing [Form 5329](https://www.irs.gov/forms-pubs/about-form-5329).[^11] It is a steep penalty for a box you simply have to check each year, which is why most people set up automatic RMD withdrawals through their broker and never think about it again.

I will be honest about how much this matters: if you are 90 with a multi-million-dollar IRA, you are not exactly suffering, and the practical concern is less "I am inconvenienced" and more "I would rather this money pass efficiently to my family than get taxed as forced income I do not spend." That is the real argument for favoring Roth earlier: a Roth has no RMD, so it can keep compounding untouched and pass to heirs without forcing you to take (and be taxed on) income you did not want.

A related but distinct situation is worth flagging here: _inheriting_ someone else's traditional 401(k) or IRA. That comes with its own 10-year deadline to empty the account and a timing trick to do it without a tax spike; I cover it in the [inherited-account note](#if-it-applies-to-you) near the end.

### HSA tax mechanics in detail

_Read this if you have an HSA or are eligible for one. It is the best account in the entire tax code, and the details matter._

[Post 2](/blog/where-each-dollar-goes#step-5-hsa-beyond-the-match) covered HSA strategy. Here is the tax machinery.

The HSA is the only **triple-tax-advantaged** account in the system:

1. **Contributions are deductible** (they reduce your AGI even if you do not itemize).
2. **Growth is tax-free** (no tax on dividends, interest, or gains inside it).
3. **Withdrawals for qualified medical expenses are tax-free.**[^12] And after age 65, the HSA gets even more flexible: you can withdraw for _any_ reason and it is simply taxed as ordinary income, exactly like a traditional IRA (medical withdrawals stay tax-free at any age). So the worst case for an HSA after 65 is that it behaves like a traditional retirement account, and the best case is it is fully tax-free. There is no bad outcome.

There is a fourth advantage most people miss, and it applies only to **HSA contributions made through payroll** (a Section 125 cafeteria plan): **those contributions also skip FICA**, the 7.65% payroll tax.[^9] So instead of saving just your income-tax rate, you save income tax _plus_ 7.65%.

**In numbers.** A single filer in the 24% bracket contributing the 2026 max of $4,400:

- **Through payroll:** income tax saved $4,400 times 24% = $1,056, plus FICA saved $4,400 times 7.65% = $337. **Total saved: $1,393** (which is 31.65% of the contribution).
- **Contributed directly (a check in March):** income tax saved $1,056, FICA saved $0. **Total saved: $1,056** (still very much worth doing).

A quick word on the math, since it is a fair thing to question: the two savings are simply _added_ (24% + 7.65% = 31.65%), not compounded, because income tax and FICA are two separate taxes both levied on the same contribution amount. The contribution dodges each of them independently, so you add the two rates. The difference between contributing directly and contributing through payroll is **$337 every year**, money you can get no other way, and over a career the FICA savings alone exceed $10,000. A 401(k) does _not_ skip FICA, which is part of what makes the HSA so special. So if your employer offers payroll HSA contributions, always use that route over contributing on your own. (If your state has income tax, payroll contributions usually dodge that too.)

A recordkeeping note for the "pay out of pocket now, reimburse yourself years later" strategy from [Post 2](/blog/where-each-dollar-goes#step-5-hsa-beyond-the-match): save every medical receipt somewhere durable. And yes, a clear photo or scan backed up to the cloud is fine; the IRS accepts digital records, so you can toss the paper original as long as the image is legible and safely stored. Name it something like `2026-03-15_dental_85.pdf` and forget about it. There is no time limit on reimbursing yourself, only that the expense happened after you opened the HSA. The receipts are your proof if you are ever audited.

### The backdoor Roth

_Skip this unless your income is above the Roth limit (~$153k single / ~$242k married in 2026), or you expect it to be soon. Below that, just contribute to a Roth directly._

Above the income limit ($153,000 single / $242,000 married in 2026) you cannot contribute to a Roth directly.[^8] The **backdoor Roth** is the legal workaround.

First, what "converting a Traditional to a Roth" even means, since the whole strategy rests on it. A conversion is moving money from a Traditional IRA into a Roth IRA. When you do, you pay ordinary income tax on any _pre-tax_ dollars you move (because they were never taxed), and the money then lives in the Roth, growing tax-free forever after. That is normally a taxable event. The backdoor trick is to convert money that was _already taxed_, so there is nothing left to tax on the way through.

Here is why there is no tax. There is no income limit on contributing to a Traditional IRA (only on _deducting_ it), and there is no income limit on converting. So a high earner contributes to a Traditional IRA and takes _no deduction_ for it (above certain incomes, if you are covered by a workplace retirement plan, the traditional IRA deduction phases out entirely, so the contribution is non-deductible anyway), which means those dollars are post-tax, already-taxed money sitting in a Traditional IRA. Converting already-taxed dollars to Roth triggers no tax, because there is nothing left to tax. You have effectively made a Roth contribution through a side door.

Five steps:

1. **Contribute to a Traditional IRA, non-deductibly.** You contribute $7,500 and do not take the deduction (your income is too high to deduct anyway).
2. **Wait a day or two** so the contribution and conversion are clearly separate events. (Minor annoyance: the cash sits in the settlement fund and may earn a couple dollars of interest, which becomes the only taxable part. Not worth worrying about.)
3. **Convert the Traditional IRA to your Roth IRA.** At Fidelity this is done as a transfer between your own accounts: open the **Transfer** page, set the "From" account to your Traditional IRA and the "To" account to your Roth IRA, move the full cash balance, and submit. Fidelity automatically treats a same-owner Traditional-to-Roth transfer as a Roth conversion.
4. **Owe almost no tax,** because the contributed dollars were already taxed; only the few dollars of interest earned in between are taxable.
5. **File Form 8606 with your return.** This is the step everyone forgets, and it is essential.[^13]

**In numbers.** Sarah earns $250,000, so her direct Roth is fully phased out.

- Jan 6: she contributes $7,500 to a new Traditional IRA (non-deductible).
- Jan 8: it earned about $3 of interest; she converts the full $7,503 to her Roth.
- April: she files [Form 8606](https://www.irs.gov/forms-pubs/about-form-8606), recording the $7,500 of already-taxed basis. The only taxable part is the $3 of interest. (At $250,000 of income, her taxable income after the standard deduction is about $233,900, which puts her top dollars in the **32% bracket** for a single filer in 2026; 32% of $3 is about **$0.96**. Essentially nothing.)
- That $7,500 now grows tax-free forever, roughly **$57,000** in 30 years at 7%.

**Is this actually allowed?** Yes, and more cleanly than its sneaky name suggests. Each of the two steps (a non-deductible Traditional contribution, and a conversion) is explicitly permitted in the tax code, and Congress acknowledged the combined maneuver in writing in the conference report to the 2017 Tax Cuts and Jobs Act.[^14] So this is not a gray-area loophole the IRS merely tolerates; it is a sanctioned, documented strategy. (Congress has _proposed_ closing it more than once and could someday, but as of 2026 it is fully available.)

**Why Form 8606 matters:** it is the IRS's record that you already paid tax on that $7,500. Skip it and the IRS has no proof, so it can tax the money _again_ when you withdraw decades later. Tax software will not file it unless you explicitly answer "yes, I made a non-deductible Traditional IRA contribution", and Fidelity will not file it for you either; Fidelity reports the contribution and the conversion to the IRS on its own forms, but _you_ (or your software) must file the 8606 that ties them together and claims the basis. As for why someone might appear to have several Traditional IRAs: usually it is just leftover accounts from old rollovers, and consolidating them actually makes the backdoor cleaner (see the pro-rata rule next). You do not need multiple Traditional IRAs to do this; one is enough.

### The pro-rata rule

_Read this only if you are doing a backdoor Roth AND you also have pre-tax money in a Traditional, SEP, or SIMPLE IRA. It is the trap that ruins backdoor Roths._

If you have **any pre-tax money in a Traditional, SEP, or SIMPLE IRA on December 31 of the conversion year**, the IRS will not let you convert just the new non-deductible dollars. It treats your conversion as a proportional blend of all your IRA money, pre-tax and post-tax together.[^8]

**In numbers.** Mark has $50,000 of pre-tax money in a Traditional IRA (an old 401(k) rollover). He adds $7,500 non-deductibly and tries to convert just that $7,500.

- Total IRA balance: $57,500, of which $7,500 (13%) is post-tax and $50,000 (87%) is pre-tax.
- The IRS says his $7,500 conversion is 13% post-tax and 87% pre-tax. So $6,522 of it counts as converting pre-tax money, which is taxable.
- At his 32% bracket, that is **$2,087 of surprise tax** ($6,522 times 0.32) on a conversion he expected to be free.

The fix is to have **no pre-tax IRA balance on December 31** of the conversion year. The cleanest way: roll the pre-tax IRA _into a 401(k)_. And yes, you can roll a Traditional IRA into a Traditional 401(k) if your plan accepts incoming rollovers (most do), with no tax and no penalty; it is a like-to-like move, pre-tax to pre-tax. 401(k) balances are invisible to the pro-rata rule (it only counts IRAs), so once the pre-tax money is parked in the 401(k), your only remaining IRA balance is the fresh $7,500 of post-tax money, and the conversion is clean. The alternative fix is to convert the entire pre-tax balance to Roth and pay the tax, which is sometimes worth doing in a low-income year.

One more clock to know: each Roth **conversion** has its own 5-year waiting period before the converted amount can be withdrawn penalty-free (this is separate from the contribution clock).[^8] An example: convert $20,000 from a Traditional IRA to your Roth IRA in 2026, and that specific $20,000 cannot be withdrawn from the Roth penalty-free until January 2031, even though contributions you made directly to the Roth IRA are always available. Each year's conversion starts its own five-year clock. For a standard backdoor Roth this rarely bites, because the converted money is mostly your own already-taxed basis and you are not planning to touch it for decades anyway. It matters most for the [conversion ladder](#the-roth-conversion-ladder), covered below.

### The mega backdoor Roth

_Skip this unless your 401(k) plan allows after-tax contributions plus in-plan conversions or in-service withdrawals. Most plans do not. One call to your plan administrator settles it._

If your plan supports it, this is the biggest tax-advantaged opportunity in the system. Most plans do not. Some do.

Let me lay out the 401(k) contribution types first, because the confusion here is understandable; there are three different kinds of money that can go into a 401(k), and "after-tax" and "Roth" sound like the same thing but are not.

- **Your own elective contribution: up to $24,500 (2026).**[^15] This is the limit on what _you_ choose to defer from your paycheck. You can put this $24,500 on the **pre-tax (traditional) side, the Roth side, or split it** however you like. Either way, your personal contributions cannot exceed $24,500 total.
- **The employer match.** Whatever your company kicks in. This is _on top of_ your $24,500 and does not count against it. (This surprises almost everyone: the $24,500 cap is on _your own elective deferrals_ only. The match counts only toward the separate, higher $72,000 combined ceiling below, not against your personal limit.) It lands on the pre-tax side (per the section above).
- **After-tax contributions (the special third type).** Some plans allow a _third_ kind of contribution, confusingly named "after-tax," which is different from Roth. The difference: a **Roth** contribution is after-tax going in _and_ tax-free coming out, with no tax on growth. A plain **after-tax** contribution is after-tax going in, but its _growth_ (the gains, dividends, and interest it earns) is taxed as **ordinary income** coming out. You are right to be suspicious of that: in an ordinary taxable brokerage account, that same growth would mostly be long-term gains and qualified dividends at the lower 0/15/20 rates, so leaving money in plain after-tax and never converting is actually _worse_ than a taxable account since it turns preferential-rate growth into ordinary-rate growth. That is why after-tax on its own is a bad deal. Its _only_ redeeming purpose is to be **converted to Roth** quickly, before it grows, which is the whole trick, and done right it turns the worst-taxed account into the best one.

Now the limit that ties it together. There is a separate, much higher ceiling on _everything combined_ (your contribution + the match + any after-tax): the **415(c) limit, $72,000 in 2026.**[^15] The mega backdoor exploits the gap between your $24,500 personal limit and that $72,000 total ceiling.

**In numbers.** A high earner whose plan allows after-tax contributions and conversions:

- 415(c) total ceiling (everything combined): **$72,000**
- Their own contribution (say, all on the Roth side): **$24,500**
- Employer match: **$10,000**
- Room left under the $72,000 ceiling for after-tax contributions: $72,000 minus $24,500 minus $10,000 = **$37,500/year**

So they contribute that $37,500 as after-tax money, then immediately convert it to Roth (either through an "in-plan Roth conversion" or by moving it to a Roth IRA via an "in-service withdrawal"). Converting it right away means almost no growth has happened yet, so almost nothing is taxable, and now that $37,500 grows tax-free forever inside the Roth. Stacked with the regular $24,500 Roth contribution and a $7,500 backdoor Roth in an IRA, this person is moving well over $60,000/year onto the Roth side.

To find out if you can do it, ask your plan administrator two questions: (1) does the plan allow after-tax contributions (the special third type, separate from Roth)? and (2) does it allow in-service withdrawals or in-plan Roth conversions? You need **both**. The execution is clunky (often a phone call per conversion), which is the main reason people who _could_ do this do not.

If both answers are yes, here is what to actually do. Set your after-tax contribution rate with the plan's provider (this is usually a separate election from your regular pre-tax/Roth deferral), then turn on **automatic in-plan Roth conversions** if the plan offers them, so each after-tax contribution is swept to Roth immediately with no phone calls. If the plan does not automate it, you request a conversion or in-service withdrawal manually each time (a periodic online request or call). On the paperwork side, the mega backdoor does _not_ need Form 8606 (that one is for IRA basis); instead, the conversions show up on a **1099-R** from your plan, and your tax software handles them when you enter that form. The one thing to watch is that only your after-tax _contributions_ convert tax-free; any growth that happened before you converted is taxable, which is exactly why you convert as fast as the plan allows.

### The Roth conversion ladder

_Skip this unless you are planning to retire before 59.5. It is the classic early-retirement move and irrelevant otherwise._

Normally, pulling money out of a _traditional_ 401(k) or IRA before 59.5 costs ordinary income tax plus a 10% penalty.[^8] The income tax applies because it is pre-tax money finally being taxed; the 10% is the early-withdrawal penalty on top. The Roth conversion ladder is a way to get at that money early while dodging the 10% penalty, using the per-conversion 5-year clock from the [pro-rata section](#the-pro-rata-rule).

The setup: in a low-income year, convert a slice of your Traditional balance to Roth. You pay ordinary income tax on the conversion now (ideally at a low bracket), but **no penalty**, because conversions are not withdrawals. Then you wait 5 years. After 5 years, that converted amount can be withdrawn penalty-free _and_ tax-free (you already paid the tax at conversion), at any age.

To be clear about what you are and are not avoiding: you still pay ordinary income tax on the money when you convert it. What the ladder saves is the 10% early-withdrawal _penalty_. You are trading "pay tax later plus a 10% penalty" for "pay tax now at a low rate, no penalty," and in an early-retirement low-income year the latter is much cheaper.

Stack conversions across years and you build a ladder. The rung sizes can be whatever fits your spending and your bracket; I have used $50,000 rungs here to match a comfortable early-retirement budget, but smaller rungs work exactly the same way:

|Convert in|Amount|Withdrawable penalty-free in|
|---|---|---|
|2030|$50,000|2035|
|2031|$50,000|2036|
|2032|$50,000|2037|
|2033|$50,000|2038|

The classic early-retirement version: retire at 45, start converting each year at a low post-work bracket, and live in the meantime off taxable brokerage money and Roth IRA _contributions_ (which you can withdraw anytime). By 50, the first rung matures, and from then on a fresh rung opens every year, carrying you penalty-free to 59.5.

Size each year's conversion to fill the low brackets without spilling into higher ones; a common rule is to convert up to the top of the 12% bracket.

Here is that sizing in numbers. Take an early-retired married couple whose only income this year is $10,000 of dividends and interest. The 12% bracket for a married couple tops out at **$100,800 of taxable income** in 2026. Now add the standard deduction ($32,200), and that ceiling corresponds to about **$133,000 of total income**. Subtract the $10,000 they already have, and they can convert roughly **$123,000** from their Traditional IRA to Roth this year while keeping every converted dollar inside the 10% and 12% brackets. They pay a low rate now, start a fresh 5-year rung, and never touch the 22% bracket. Fidelity's [Roth conversion calculator](https://www.fidelity.com/calculators-tools/roth-conversion-calculator/) helps you pin down the exact number.

## Where You Live

_Read this if you have any flexibility about where you live, especially if your work is remote. Skip it if you are tied to a location._

Federal tax is only half the story. State income tax ranges from zero to over 13%, so where you live can matter as much as any single strategy in this post.

At one end, **nine states have no income tax on wages at all** (2026): Texas, Florida, Washington, Nevada, Tennessee, South Dakota, Wyoming, Alaska, and New Hampshire.

At the other end are the high-tax states, where the top rate reaches into the teens: California tops out at 13.3% (higher with surcharges), and New York City, New Jersey, Oregon, and Hawaii are all in similar territory. The gap between a no-tax state and a high-tax one is the whole point of this section.

**In numbers.** A single software engineer earning $200,000, comparing California and Texas:

- Federal tax is the same either way: ~$36,000.
- California state tax: roughly **$16,000** all-in (state income tax plus the state disability surcharge).
- Texas state tax: **$0.**
- Difference: about **$16,000/year.** Invested at 7% over a 30-year career, that is roughly **$1.5 million** of extra wealth, before any other lifestyle differences.

The honest catch is cost of living. No-income-tax states often claw some of it back through property and sales taxes. Texas property tax runs ~1.8 to 2.5% of home value a year versus ~0.7% in California, which on a $500k home is $5,000 to $9,000 more annually and offsets part of the income-tax savings. Still, for a high earner with portable work, moving from a high-tax to a no-tax state can save $20k to $30k a year for life even after the offsets.

A few related state-tax details:

- **SGOV** (a Treasury-bill ETF) is exempt from state income tax, because the underlying T-bills are federal obligations and states cannot tax those. In a high-tax state like California that exemption is worth real money versus an ordinary bond fund. The exemption only applies to funds holding direct U.S. Treasuries.
- **In-state municipal bonds** are usually free from federal _and_ your state's income tax; out-of-state munis are only federal-free. So a California resident is better off in a California muni fund than a national one. The same [tax-equivalent-yield formula](#asset-location) from the asset-location section applies, just stacking the state rate on top of the federal one to see how much that extra exemption is worth.
- **Estate taxes vary by state too.** Some states with income tax have no estate tax and vice versa. Florida, Texas, and Nevada have neither. Massachusetts and Oregon levy estate taxes starting around $2 million, far below the federal $15 million.

If you can choose where you live, this is worth real research.

## Practical Mechanics

_Read the parts that apply. The estimated-tax piece matters if you have non-W-2 income; the rest is general execution._

### Estimated quarterly taxes and the safe harbor rule

_Read this if you have meaningful self-employment income, do a big Roth conversion, or sell a lot of appreciated stock. Skip it if your income is all W-2 with normal withholding._

If you have meaningful income that is not subject to payroll withholding, the IRS expects you to pay tax on it **during the year**, in four estimated installments, not all at once in April. Come up short and you owe an **underpayment penalty**: an interest charge on the amount you should have paid earlier, calculated at the IRS's published rate (in the ballpark of 7 to 8% annualized lately) for the time you were short. It is not a flat fine; it is interest on the shortfall, which is why a small miss is a small penalty.

**The safe harbor rule** lets you avoid the penalty with certainty. You owe no penalty if your total payments during the year (withholding plus estimates) hit at least:

- **100% of last year's total tax** (110% if last year's AGI was over $150,000), **or**
- **90% of this year's tax**, whichever is smaller.[^16]

To find "last year's total tax," look at your last filed return: it is the line labeled **"total tax"** on your Form 1040. Note this is the total tax paid for the whole year, _not_ the amount you owed or were refunded in April. Your tax software or preparer will have it.

**In numbers.** Jenna owed $30,000 in total federal tax last year (AGI $140,000).

- Safe-harbor target this year: 100% of last year's total tax = **$30,000.**
- Payroll withholding will cover $28,000, so she needs $2,000 more. She can spread that across the year's four installment deadlines (below), or, simplest of all, just nudge up her paycheck withholding, which the IRS counts as paid evenly all year no matter when it actually happened (the trick at the end of this section).
- Even if this year's actual bill balloons to $50,000 from a Roth conversion, she owes **no penalty**, just the remaining balance in April.

The first option is the easy one to plan around: match last year's tax through withholding and estimates, and you are safe no matter how big this year's bill turns out.

And what if she procrastinates? Say she skips the quarterly schedule and sends the whole $2,000 as one estimated payment at the final January 15 deadline. The penalty is smaller and more surgical than people fear. The $30,000 safe-harbor target is really four required installments of $7,500 each, and her $28,000 of withholding counts as $7,000 toward each one, so the first three quarters each ran **$500 short** until the January payment caught them up. The penalty is the IRS interest rate (call it 7% annualized) charged on each $500 for the months it sat unpaid: roughly $26 for the April installment, $20 for June, $12 for September, so **about $58 total**. It is _not_ 7% of the $50,000 bill, not 7% of the $22,000 still unpaid at year-end, and not even 7% of the full $2,000, because each quarter's shortfall accrues interest only from its own due date until it is paid. So yes, a last-quarter payment mostly works: it stops the clock and satisfies the safe-harbor total, but it cannot retroactively fix the three quarters that were already short, so it costs her that $58. The $20,000 balance she settles in April costs nothing extra, because the safe harbor was met. And the withholding trick below would have erased even the $58.

A couple of practical notes. You do not have to fear over-withholding; if you pay in too much, you simply get it back as a refund (a refund is just the IRS returning money you overpaid). Worth an ironic aside: on an ordinary refund the IRS pays you no interest for having held your money all year, yet if _you_ underpay it charges you interest on the shortfall. The asymmetry runs in the house's favor. To see how much your employer is currently withholding, look at the federal income tax line on a recent pay stub, or box 2 of your prior-year W-2. Estimated deadlines are roughly April 15, June 15, September 15, and January 15; pay through [Form 1040-ES](https://www.irs.gov/forms-pubs/about-form-1040-es) on the IRS site.

**A useful trick:** payroll withholding is treated by the IRS as paid _evenly across the whole year_, no matter when it actually happened, while estimated payments are credited to the quarter you made them.[^16] So if you are behind late in the year, bumping up your **W-4 withholding** for the last few paychecks can retroactively cure an earlier shortfall in a way a December estimated check cannot. Use the "Extra withholding" line (Step 4c) on a new [W-4](https://www.irs.gov/forms-pubs/about-form-w-4) to do it.

### Where to find your tax forms on Fidelity

_Practical reference for anyone with a Fidelity account. Skim once._

App: **Profile, then Documents, then Tax Forms.** Web: **Accounts & Trade, then Tax Forms & Information.**[^17]

Here is what each form is and roughly when it lands:

- **Consolidated 1099 (mid-February):** the big one for a taxable brokerage. It bundles the **1099-DIV** (dividends you received), **1099-INT** (interest you received), and **1099-B** (the record of everything you sold, with cost basis and holding period). It can arrive later for funds holding REITs or foreign stocks.
- **Corrected 1099 (through March):** sometimes the broker reclassifies income after the fact and reissues. **Wait for the final version before filing**, or you may have to amend.
- **1099-R (end of January):** reports money that came _out_ of a retirement account (distributions and conversions, including a backdoor Roth conversion).
- **5498 (May):** reports money that went _into_ an IRA (contributions). It arrives after the April deadline because you can contribute up to April 15.
- **1099-SA (late January):** reports money that came _out_ of your HSA during the year.
- **5498-SA (May):** reports money that went _into_ your HSA. You use both HSA forms to fill out [Form 8889](https://www.irs.gov/forms-pubs/about-form-8889).[^18]
- **K-1 (as late as September):** a partnership form you only see if you hold certain partnerships or MLPs. Most index investors never get one; if you do, you will likely have to file an extension and wait on it. Honestly, unless a partnership or MLP offers something you genuinely cannot get elsewhere, it is usually not worth the tax hassle: the K-1 lands late, drags out your whole return, and often forces you into a pricier tier of tax software just to handle it. For most people, sticking to ordinary funds and ETFs that issue a simple 1099 is the saner path.

### TurboTax and Fidelity integration

_Read this if you file your own taxes. It is the single biggest time-saver in the Fidelity setup._

In TurboTax, at the investment-income step, choose "import from Fidelity," enter your Fidelity credentials inside TurboTax, and it pulls your 1099-DIV, 1099-INT, 1099-B (with cost basis and holding period), 5498, 1099-R, and HSA data automatically. For an active taxable account this saves hours and eliminates transcription errors, since the lot-by-lot cost basis would take a long evening to type by hand. The same import works with H&R Block, FreeTaxUSA, and TaxAct.

Worth saying plainly: for most people with a straightforward situation (W-2 income, index funds, and the accounts in this series), filing your own return this way takes a couple of hours start to finish and costs anywhere from free to around $100 in software. A CPA for the same return often runs several hundred dollars. Once your taxes get genuinely complicated (a business, rental properties, a pile of K-1s, a multi-state year), a good CPA earns the fee; but for the situations this series describes, the software plus an afternoon usually does the job just as well for a fraction of the cost.

One catch: **the import does not create Form 8606.** If you did a backdoor Roth, you still have to walk through the software's question-and-answer section (TurboTax calls it the "interview," meaning the step-by-step questions it asks you) and explicitly tell it you made a non-deductible Traditional IRA contribution. The import brings the raw data; it does not know your strategy, so you have to surface it.

### Fidelity's tax tools (and a note on using AI)

_Optional. Worth twenty minutes once a year if you like running your own numbers._

The [Fidelity tax center](https://www.fidelity.com/tax-information/overview) has genuinely useful calculators: tax-equivalent yield for munis, an RMD estimator, a withholding estimator for the W-4, a Roth conversion modeler, and a capital-gains projector. None of them know your full state picture, but they are accurate on the federal piece and free.[^17]

Worth saying plainly, since this whole post is about reading rules and applying them to your own numbers: a capable AI assistant is now a genuinely useful tax-thinking tool. You can paste in your situation (income, the buckets your money falls in, what you are considering) and have it walk the brackets with you, sanity-check a harvesting or conversion plan, or explain a form in plain language. It is not a CPA and it can be wrong, so verify anything important against the IRS source or a professional, especially for the big irreversible moves (conversions, residency changes). But for _understanding_ your situation and pressure-testing a plan before you act, it is the cheapest good tax help that has ever existed.

## Putting It All Together: The Sabbatical Year

_Read this one even if you skipped sections above. It is the payoff, and it shows how the pieces stack._

The clearest way to show how these stack is to walk one low-income year end to end.

You take 2027 off: leave a job in December 2026, spend the year traveling or writing or with family, start fresh in January 2028. You are married; your spouse keeps working and earns $70,000. You own your house outright in a state with no income tax. Your investments have grown over the prior decade.

**The baseline, before any planning.** Your spouse earns $70,000 of ordinary income; you earn nothing.

- Spouse's wages: $70,000
- Subtract the standard deduction ($32,200): taxable income = **$37,800**
- Tax at the brackets: 10% on the first $24,800 ($2,480) + 12% on the remaining $13,000 ($1,560) = **about $4,040**
- That is the starting point. Now we go to work on it.

**Move 1: Roth IRAs for both of you.** The spousal rule lets you both contribute off your spouse's $70k of earned income. $7,500 each, $15,000 total, no tax impact now, and about **$114,000** of tax-free growth in 30 years at 7%.

**Move 2: Picture the glass before harvesting.** Your taxable income is $37,800, all ordinary. The 0% LTCG ceiling for a married couple is $98,900. So the glass is filled to $37,800, and there is **$98,900 minus $37,800 = $61,100** of room at the top where long-term gains can stack in at **0%**. Anything you pour in beyond that line is taxed at 15%. That $61,100 of headroom is the resource you are going to spend across the next two moves.

**Move 3: Split the headroom between a gain harvest and a Roth conversion.** You have two opportunities to use that $61,100 of available headroom, and they compete for the same space. A Roth conversion adds **ordinary income**, filling the lower portion of the tax brackets first. A gain harvest adds **preferential income** (long-term gains and qualified dividends), which stacks on top of your ordinary income. Because every dollar of Roth conversion increases your ordinary income, it reduces the amount of room remaining in the 0% capital gains bracket for harvested gains. In other words, both strategies draw from the same unused space, so you will need to divide it between them. Here is a simple way to do that.

First, the gain harvest. You hold an index fund bought for $160,000, now worth $210,000 ($50,000 of unrealized gain).

- You sell enough to realize **$20,000** of long-term gain.
- Stacked on your $37,800 of ordinary income, your total is now $57,800, still well under the $98,900 ceiling, so this $20,000 sits below the 0% line and is taxed at **0%.**
- You **rebuy the same fund the same day** (no wash-sale rule on gains), resetting your cost basis $20,000 higher for free.

Second, the Roth conversion. Earlier in 2027 you rolled an old $200,000 Traditional 401(k) into a Traditional IRA so you could convert from it. (Because you are converting, not withdrawing, there is no early-withdrawal penalty even though you are under 59.5; you just pay ordinary income tax on the converted amount.)

- You convert **$40,000** from the Traditional IRA to your Roth IRA. This $40,000 is _ordinary_ income (pre-tax money finally being taxed).
- Your ordinary income becomes $70,000 wages + $40,000 conversion = $110,000; minus the $32,200 standard deduction = **$77,800 of taxable ordinary income**, all of it still within the 12% bracket.
- Tax on the conversion: **$40,000 × 12% = $4,800**, all inside the 12% bracket. (For a married couple the 12% bracket runs up to $100,800 of taxable income.)
- Now watch what the conversion did to the glass: it raised your ordinary fill level from $37,800 to $77,800. That is exactly why you only harvested $20,000 of gains in the first step instead of the full $61,100; you deliberately left room so the conversion would not push your gains above the 0% line. With ordinary income now filling the glass to $77,800, your $20,000 of stacked gains reaches $97,800, still just under the $98,900 ceiling, so the harvested gains are _still_ taxed at **$0.**
- **Total federal tax for the year: about $8,840** (the $4,040 baseline on the wages plus the $4,800 from the conversion).

Since this is the densest move in the post, here is the finished glass in one picture, drawn the way a glass looks: the top row is the top of the glass, and the ordinary income at the bottom filled first.

| The glass at year-end | Amount | Where it sits (taxable income) | Taxed at |
|---|---|---|---|
| Unused 0% room below the ceiling | $1,100 | $97,800 → $98,900 (the 0% ceiling) | (unused) |
| Harvested long-term gains (preferential) | $20,000 | $77,800 → $97,800 | **0%** |
| Roth conversion (ordinary) | $40,000 | $37,800 → $77,800 | 12% |
| Spouse's wages after the standard deduction (ordinary) | $37,800 | $0 → $37,800 | 10% and 12% |

The ordinary income fills from the bottom, the gains ride on top, and everything preferential stays under the $98,900 ceiling. That is the whole trick in one picture.

(The $40,000 conversion amount is a choice, not a formula; you size it to fill up the low brackets without spilling into the 22% bracket, and without pushing your stacked gains over the 0% ceiling. I picked $40,000 to keep all of it in the 12% bracket and keep the capital gains tax-free.)

**Move 4: Start the conversion ladder.** That $40,000 you just converted can be withdrawn penalty-free starting in 2032 (its own 5-year clock). If you convert again in 2028, 2029, and 2030, you build a ladder of rungs maturing one after another, the classic bridge to early retirement. The sabbatical year is the natural time to lay the first rung.

**Move 5: Watch the ACA cliff.** If you are buying health insurance on the ACA marketplace this year, your subsidy depends on your [MAGI](#the-vocabulary) (modified AGI, from the vocabulary; roughly your income with a few items added back). Roth conversions and realized capital gains _raise_ MAGI, and these can shrink or eliminate your subsidy, sometimes costing more than the conversion saves. The subsidy structure has changed repeatedly (the original ACA, then pandemic-era enhancements, then the 2025 OBBBA changes), so check your state marketplace's current rules before converting in a year you are on ACA coverage.

**The full result of the year off:**

- **Tax owed: about $8,840 federal ($4,800 of it from the planning moves), $0 state.**
- **Roth balance up $55,000** ($15,000 of spousal contributions + $40,000 conversion), all of it growing tax-free from here.
- **Cost basis stepped up $20,000**, which saves about $3,000 of future tax (the 15% you would otherwise have paid on that gain later).
- **First conversion-ladder rung placed**, maturing in 2032.
- **Net effect:** for about $4,800 of extra tax, you moved $55,000 onto the permanently-tax-free side of your finances, locked in $3,000 of future tax savings, and started your early-retirement bridge, all in a year you earned nothing from a job.

Without the planning, the same year off would have cost about $4,040 in tax (just the tax on the spouse's income) but produced none of that Roth balance, none of the basis step-up, and no ladder rung. **The planning is what turned a year off into a wealth-building year.**

This is the freedom thesis from [Post 1](/blog/money-is-freedom) made concrete. The year off was not just affordable; it was strategically valuable. Money buys the option to take the year. Knowing the tax code is what makes the year nearly free.

## If It Applies to You

_A set of narrower topics. Read only the ones whose names describe your situation._

**Net Investment Income Tax (NIIT).** A 3.8% surtax (an extra tax stacked on top of the normal one) on investment income for filers with MAGI (modified AGI, from the vocabulary) above $200,000 single / $250,000 married. These thresholds have not been inflation-adjusted since 2013, so more people get pulled in each year. Above the line, your effective long-term gains rate becomes 18.8% or 23.8% instead of 15% or 20%. Like the 0% bracket, it applies only to the portion of income above the threshold, not your whole gain. Worth modeling when you harvest a big gain.

**The Saver's Credit.** A federal credit for lower-income filers who contribute to a retirement account, worth 50%, 20%, or 10% of the first $2,000 you contribute ($4,000 married), so the most anyone gets is $1,000 ($2,000 married). The catch most people miss is that the 50% tier (the one that gives the full credit) is reserved for quite low incomes: for 2026 it applies below about **$24,250 of AGI for a single filer** (about $48,500 married), and the credit phases down through the 20% and 10% tiers before disappearing entirely above roughly **$40,250 single / $80,500 married**. So a single filer with $23,000 of AGI who puts in $2,000 gets the full $1,000 back; someone at $35,000 is in the 10% tier and gets about $200. Still free money, just know which tier you are in before you count on a number. You claim it by filing [**Form 8880**](https://www.irs.gov/forms-pubs/about-form-8880) with your return[^19] (your tax software asks the qualifying questions automatically if your income is in range). Many who qualify never claim it. (Note: starting in 2027 this credit is scheduled to be replaced by the "Saver's Match," a direct government deposit into your account rather than a credit on your return, which helps people who owe little or no tax.)[^11]

**Kiddie tax.** A child's investment income above about $2,700 (2026) gets taxed at the parents' rate, not the child's.[^1] Relevant if you gift appreciated stock to kids or open a UTMA (a custodial investment account in a child's name). The 529-to-Roth rollover below is often cleaner.

**Stock compensation (RSUs, ESPPs, ISOs).** This is for if your employer pays you partly in company stock. A few plain definitions: **RSUs** (restricted stock units) are shares the company gives you outright as they "vest," meaning as you stay long enough to earn them; they count as ordinary income at their value on the vesting day, taxed just like salary. An **ESPP** (employee stock purchase plan) lets you buy company stock at a discount through payroll. **ISOs** (incentive stock options) are the right to buy company stock at a fixed price later, with their own more complicated tax rules (including a trap called the AMT that is beyond this post). The tax detail worth knowing across all of them: once you own the shares, the one-year clock for long-term capital gains starts, and your cost basis is whatever value was already taxed as income, so selling right away usually triggers little or no additional gain.

Here is my actual opinion, separate from the tax mechanics: **I think holding a large position in your employer's stock is a bad idea, and I would sell it down to something small as it vests.** The reason is concentration risk of the worst kind. Your paycheck already depends entirely on this one company. If you also hold a big slug of its stock, then a bad year for the company can take your job and your savings at the same time. That is the opposite of diversification: your income and your investments become the same bet. The tax code does not stand in your way here, because (as noted) selling soon after vesting usually costs little or nothing in tax, since the basis is already stepped up to the vesting-day value. So the main thing between you and a diversified portfolio is the emotional pull of holding "your" company's shares. I would take the broad index fund over the lottery ticket every time, even when the lottery ticket has your employer's logo on it. Sell as it vests, pay the small tax if any, and reinvest in something that does not also sign your paychecks.

**Inherited IRA and 401(k) 10-year rule.** Inherit a non-spousal IRA or 401(k) (from a parent, say) and you generally must empty the whole account within 10 years. One important distinction from the step-up rule above: **the step-up in basis does not apply to retirement accounts.** A taxable brokerage account gets its basis reset at death, but an inherited _traditional_ IRA or 401(k) does not; its withdrawals are still taxed as ordinary income to you, just as they would have been to the original owner. An inherited _Roth_ keeps growing tax-free and its withdrawals are tax-free, but you still must drain it within the 10 years.

Until 2020, heirs could "stretch" these withdrawals over their _own_ life expectancy, spreading the taxable income (and the tax on it) across decades. The [SECURE Act](https://www.congress.gov/bill/116th-congress/house-bill/1994) replaced that stretch with the 10-year rule, which crams all those withdrawals, and all that ordinary income, into a single decade, so it is worse for heirs.[^20] That is why the planning here is all about _timing_. Because every dollar you pull from an inherited traditional account is taxed as ordinary income, the efficient move is almost never to let the balance ride and drain it in one shot in year 10 (which can stack a decade of withdrawals into one high-tax year). Instead, spread the withdrawals across the full 10 years, taking more in your lower-income years, so the income is taxed at the lowest brackets available to you.

**529-to-Roth rollover.** A 529 is a tax-advantaged account for education expenses (it grows tax-free and withdrawals for tuition and the like are tax-free). Since 2024 you can roll leftover 529 money into the beneficiary's Roth IRA, up to a **$35,000 lifetime cap**, if the 529 has been open at least 15 years.[^11] This means you cannot move the whole $35,000 at once. Each year's rollover is limited to that year's Roth contribution limit ($7,500 in 2026), and it counts against the beneficiary's own Roth contributions for the year, so in practice it takes at least five years of rollovers to reach the $35,000 lifetime maximum. Useful when a kid does not use all their college savings; the remainder becomes tax-free retirement money for them instead of being stranded.

## The Takeaway

The tax code is incentive engineering. Once you see what behavior the rules are trying to encourage, the specifics stop feeling arbitrary and start feeling like a map.

Productive long-term investment wins. Unproductive hoarding loses. Labor income is hit hardest. So: move income from the ordinary bucket toward the long-term-gains and tax-free buckets wherever you can. Hold for more than a year. Hold the biggest winners for life. Put the right asset in the right account. Convert to Roth in low-income years. Harvest losses against your highest-taxed income. Harvest gains when you have room at 0%. Live where the state takes less. Donate appreciated stock and bunch it. Use the HSA, through payroll. File Form 8606 every time you backdoor.

None of it is hidden. The IRS publishes every rule referenced here. I think about the tax code as a game, one that is genuinely tilted toward people with the patience to learn it, and yes, tilted in places that feel unfair. But here is the thing: the same rules apply to everyone. The exact strategies the wealthy use (the step-up, the backdoor Roth, asset location, bunching) are available to you the moment you understand them. There is no secret tier of the tax code reserved for other people. Learn the rules of the game, and you get to play it on the same terms.

And it loops back to [Post 1](/blog/money-is-freedom). Every dollar kept from taxes is a dollar of freedom. The sabbatical year is the cleanest proof in the whole series: taking time off is exactly what money is for, and tax planning is what makes that choice affordable years earlier than it otherwise would be. Same income, same investments, same accounts, more years of freedom.

This is the last post. The five together are the whole system I use:

1. [Money is freedom.](/blog/money-is-freedom) Save and invest because money buys control over your time.
2. [Send each dollar to the right place, in the right order.](/blog/where-each-dollar-goes)
3. [Buy low-cost index funds, mostly qualified-dividend, broad exposure, held for the long run.](/blog/how-i-pick-what-to-buy)
4. [Wire it all up at Fidelity in a weekend, then let the machine run.](/blog/the-fidelity-setup)
5. Read the tax code. Arrange your year so the IRS rewards what you were going to do anyway.

That is the whole thing. If you have read all five posts to this point, thank you, genuinely. That is a lot of personal finance to sit through, and the fact that you made it here means you are already the kind of person who will do well with this: patient, willing to learn the boring details, playing the long game. The hard part was never the math. It was caring enough to learn it, and you clearly do. Now go set your year up so you can look forward to April.

---

_I am not a licensed financial advisor or a tax advisor. This is my actual setup and reasoning, not personalized advice. For anything significant, especially Roth conversions, mega backdoor Roths, or state-residency moves, talk to a CPA._

## Sources

[^1]: IRS, "Revenue Procedure 2025-32" (2026 inflation adjustments, full bracket and contribution tables).
[^2]: IRS, "IRS releases tax inflation adjustments for tax year 2026, including amendments from the One, Big, Beautiful Bill" (October 2025 release).
[^3]: IRS Publication 550, "Investment Income and Expenses" (capital gains, wash-sale rule, basis tracking).
[^4]: Kiplinger, "Capital Gains Tax Rates 2025 and 2026," updated 2026.
[^5]: Tax Foundation, "2026 Tax Brackets and Federal Income Tax Rates," October 2025.
[^6]: IRS Publication 523, "Selling Your Home" (Section 121 exclusion).
[^7]: One Big Beautiful Bill Act of 2025 (OBBBA), Public Law 119-21.
[^8]: IRS Publication 590-A and 590-B, "Contributions to" and "Distributions from Individual Retirement Arrangements (IRAs)" (backdoor Roth, pro-rata rule, 5-year rule, RMD tables).
[^9]: IRS Publication 969, "Health Savings Accounts and Other Tax-Favored Health Plans."
[^10]: IRS, "Retirement plans FAQs on designated Roth accounts" (pro-rata treatment of non-qualified Roth 401(k) distributions; rollover basis treatment).
[^11]: SECURE 2.0 Act of 2022, Public Law 117-328 (RMD age, Roth 401(k) RMD elimination, 529-to-Roth, Saver's Match).
[^12]: IRS Publication 502, "Medical and Dental Expenses" (qualified HSA expenses).
[^13]: IRS Form 8606 instructions, "Nondeductible IRAs."
[^14]: Tax Cuts and Jobs Act of 2017, conference committee report (acknowledging the backdoor Roth).
[^15]: IRS, "401(k) limit increases to $24,500 for 2026, IRA limit increases to $7,500" (Notice 2025-67), November 2025.
[^16]: IRS Publication 505, "Tax Withholding and Estimated Tax" (safe harbor, W-4 mechanics).
[^17]: Fidelity Investments, tax center and form documentation at [fidelity.com/tax-information](https://www.fidelity.com/tax-information/overview).
[^18]: IRS Form 8889 instructions, "Health Savings Accounts (HSAs)."
[^19]: IRS Form 8880, "Credit for Qualified Retirement Savings Contributions" (Saver's Credit).
[^20]: SECURE Act of 2019, Public Law 116-94 (10-year inherited-IRA rule).
