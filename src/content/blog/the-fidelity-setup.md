---
title: "The Fidelity Setup"
description: "The Fidelity account setup I use for banking, investing, retirement accounts, HSAs, and everyday money movement."
pubDate: 2026-07-03
tags: ["Finance"]
seriesTitle: "Personal Finance"
seriesPart: 4
seriesTotal: 5
---
If you have followed the first three posts, you know why you save, where each dollar goes, and what to put in each account. This post is the most practical one in the series: how to actually wire it all up at Fidelity, step by step, in the order I would do it if I were starting from scratch today.

A quick note before the steps. The yields, fees, and limits quoted in this post are as of mid-2026, and the app navigation is described as it exists at the same date. All of it drifts: rates move with the Fed, fees change, menus get redesigned. The Fidelity pages linked throughout always show the current version, so if my snapshot and the link disagree, trust the link.

## Contents

- [Why Fidelity](#why-fidelity)
- [Step 1: Create Your Fidelity Login](#step-1-create-your-fidelity-login)
- [Step 2: Connect Your Bank](#step-2-connect-your-bank)
- [Step 3: Open the Cash Management Account](#step-3-open-the-cash-management-account)
    - [Choose SPAXX as your core position](#choose-spaxx-as-your-core-position)
    - [Get the debit card](#get-the-debit-card)
    - [Get the routing and account numbers](#get-the-routing-and-account-numbers)
    - [Use Apple Wallet or Google Wallet](#use-apple-wallet-or-google-wallet)
    - [Lock the debit card by default](#lock-the-debit-card-by-default)
    - [Turn on text and email alerts](#turn-on-text-and-email-alerts)
    - [Keep one traditional bank account open](#keep-one-traditional-bank-account-open)
- [Step 4: Open a Roth IRA](#step-4-open-a-roth-ira)
- [Step 5: Open an HSA (If You Are Eligible)](#step-5-open-an-hsa-if-you-are-eligible)
- [Step 6: Open a Taxable Brokerage](#step-6-open-a-taxable-brokerage)
- [Step 7: Set Your Beneficiaries on Every Account, Right Now](#step-7-set-your-beneficiaries-on-every-account-right-now)
- [Optional: Open a Donor-Advised Fund](#optional-open-a-donor-advised-fund)
- [Optional: Apply for the Fidelity Visa](#optional-apply-for-the-fidelity-visa)
- [How to Actually Research a Fund](#how-to-actually-research-a-fund)
- [A Few Setup Things Worth Doing Once](#a-few-setup-things-worth-doing-once)
- [Talking to a Real Person](#talking-to-a-real-person)
- [The Takeaway](#the-takeaway)

## Why Fidelity

I want to be clear up front: nobody is paying me to write this. I am not even on Fidelity's radar. There is no referral bonus on their site (they have referral links, but as far as I can tell those have not done anything in years; I have no idea why they are still there). I am recommending Fidelity because, after years of using them and looking at the alternatives, they are the cleanest platform I have found. The expense ratios on their index funds are at or below Vanguard's. The cash management account is the best one in the U.S. (no monthly fees, no minimums, unlimited ATM fee reimbursement worldwide, no foreign transaction fees on the debit card). The HSA has no fees and full investment options, which almost no other HSA provider can claim. Customer support is genuinely good. The mobile app is great and so is their website.

Vanguard and Schwab are both reasonable alternatives. I would not move heaven and earth to switch if you are already at one of them. But if you are starting from scratch or already at a worse platform (most of the big banks, Robinhood, Merrill, and so on), I would set everything up at Fidelity.

The plan from here is to open one account at a time, in the order that makes the most sense, and connect them all together.

## Step 1: Create Your Fidelity Login

The first thing to know is that "creating a Fidelity account" and "opening an investment account" are two different things. The login is the umbrella. Inside the login you can open any number of actual accounts: a Cash Management Account, a Roth IRA, an HSA, a taxable brokerage, and so on.

Download the Fidelity app (or go to [fidelity.com](https://www.fidelity.com) on a computer; either works) and create the login. You will need your name, address, Social Security number, and a phone number. To open a Fidelity account, you generally need to be a U.S. resident (or citizen) with a Social Security number and a U.S. mailing address; Fidelity does not open standard retail accounts for most non-residents. Your SSN is required so Fidelity can report your interest, dividends, and capital gains to the IRS (the 1099 forms you get at tax time). Any legitimate broker has to ask for this. If a broker does not ask, that is a sign they are not actually a broker. The whole thing takes maybe ten minutes. There is no fee to join.

While you are setting up the login, turn on two-factor authentication right away. Settings → Security → Two-Factor Authentication. Use an authenticator app (Google Authenticator, Authy, or whatever you already use) rather than SMS, since SIM-swap attacks on phone numbers are real and the consequences for a financial account are bad. This is five minutes of setup that protects you for the rest of your time with the platform.

## Step 2: Connect Your Bank

Before you can move money around, you need to connect at least one external bank account to Fidelity. This lets you transfer money in (and back out) by ACH and set up direct deposit.

A quick definition. ACH stands for Automated Clearing House. It is the U.S. interbank network that handles electronic transfers between bank accounts: direct deposits, online bill pay, transfers between two accounts at different banks. Anything that uses your routing number and account number to move money. ACH is what makes "your paycheck showing up in your account on payday" actually work behind the scenes. It is also slower than it should be: transfers typically take one to three business days to settle.

There are two main ways to connect your bank to Fidelity:

**Instant verification (Plaid).** You log into your bank through a popup window inside Fidelity. The connection happens immediately. This is the fast option. It is also the option I have had occasional issues with, and there are legitimate concerns about Plaid as an intermediary. Plaid is a third-party service that connects to your bank by holding your bank login credentials (or, increasingly, by using an API on your bank's side, which is better). Some people are uncomfortable handing those credentials to a third party they did not directly choose. If that bothers you, the next option is better.

**Microdeposit verification.** Fidelity sends two small deposits (a few cents each) to your bank account. They show up a few business days later. You log back into Fidelity, enter the exact amounts to prove you control the account, and you are connected. Slower, but no third party ever holds your bank login credentials. This is the cleaner option from a security perspective.

Once the link is set up, an ACH transfer of money into Fidelity takes a few business days to fully settle. But here is something most people do not know: Fidelity will let you trade with the incoming money the same day, before the ACH actually clears. They extend provisional credit on the pending deposit (typically up to about $250,000) under the assumption that the ACH will go through. If for some reason it bounces, they pull the trade back. In practice this means you can decide today that you want to invest $5,000, transfer the money in, and buy the fund the same afternoon, even though the cash will not fully settle in your account for several days. This is genuinely useful, especially in a market dip, when you want to put cash to work quickly. You can read Fidelity's own rules on moving money at the [Moving Money FAQ](https://www.fidelity.com/spend-save/faqs-move-money).[^1]

## Step 3: Open the Cash Management Account

This is the account that quietly replaces your bank. The Cash Management Account (CMA) is a brokerage account that Fidelity has dressed up to function exactly like a checking account, but with much better defaults. Open this one first. From the app or website, go to "Open an Account" and choose Cash Management. The full feature list is on the [Cash Management Account page](https://www.fidelity.com/spend-save/fidelity-cash-management-account/overview).[^2]

A few things to set up once it is open:

### Choose SPAXX as your core position

When cash sits in the CMA, it has to go somewhere. The default options are:

- **An FDIC-insured bank sweep**, which is paying around 1.8% as of this writing (the rate moves). A bank sweep is a system where your uninvested cash gets automatically deposited overnight into one or more partner banks. FDIC insurance is the federal government's bank-deposit guarantee: if an insured bank fails, the FDIC pays out up to $250,000 per depositor, per bank. (You can read the specifics at [FDIC.gov](https://www.fdic.gov/resources/deposit-insurance/).) Because Fidelity spreads your swept cash across many partner banks, the total coverage is much larger (up to about $5 million for the Fidelity CMA sweep).[^2] The downside is that the yield is lower, because the partner banks keep a portion.
- **SPAXX, Fidelity Government Money Market Fund**, which is currently paying around 3.3% as of this writing. This is not a bank account at all; it is a money market fund that holds short-term U.S. government securities and repurchase agreements backed by those securities. You can check the current yield any time on the [SPAXX fund page](https://fundresearch.fidelity.com/mutual-funds/summary/31617H102), since the rate moves with short-term interest rates.[^3]

This is a risk-and-reward decision. SPAXX is not FDIC-insured. That sounds scary on first read, and it is the right thing to ask about. But here is why I am not concerned. First, the fund's underlying holdings are about as safe as financial assets get: Treasury bills, government agency debt, and repos backed by those. The U.S. government has never defaulted on its short-term debt. Government money market funds have effectively never "broken the buck" (the one infamous failure was the Reserve Primary Fund in 2008, which held Lehman Brothers commercial paper, not government debt; that scenario does not apply to SPAXX). Second, the fund is held at Fidelity, which is one of the largest and most reliable brokers in the world, not some thinly capitalized startup that might vanish overnight the way FTX did. And third, the holdings are covered by [SIPC](https://www.sipc.org), which is brokerage-account insurance separate from FDIC. The yield difference is large, the risk difference in practice is negligible, and I pick SPAXX every time.

A couple of related notes. In a Fidelity HSA, the default government money market fund is [FDRXX](https://fundresearch.fidelity.com/mutual-funds/summary/316067107) rather than SPAXX (more on that in the HSA step; they are nearly identical). And if you are holding a large cash balance and want a slightly higher yield, Fidelity offers premium money market funds like [FZDXX](https://fundresearch.fidelity.com/mutual-funds/summary/31617H805) that pay a bit more, though they carry minimums (around $100,000 in a taxable account, $10,000 in a retirement account) and cannot be set as your automatic core position. You would buy them as a separate holding. For most people, SPAXX as the core is the simple right answer.

For comparison on a $20,000 balance: SPAXX earns about $660 a year, the FDIC sweep earns roughly $360, and a regular bank checking account earns about $2.

One more thing about SPAXX worth knowing because it confuses people. The fund's expense ratio is 0.42%, which looks high compared to a typical index fund. But the yield you see (the "7-day SEC yield") is already net of the expense ratio. You do not subtract the fee a second time. When SPAXX shows a 3.3% yield, that is what you actually earn.[^3] The reason the expense ratio is structured this way (high on paper but already deducted from the yield) is regulatory and mostly irrelevant to you as a holder; the only number that matters is the net yield.

### Get the debit card

Order it from inside the app. It is free, has no annual fee, and works anywhere Visa is accepted. (For the record, the card is issued through a partner bank, PNC Bank or Leader Bank, under the Visa network rather than by Fidelity directly, which is normal for brokerage debit cards.) Full details are on the [ATM/Debit Card page](https://www.fidelity.com/spend-save/atm-debit-card).[^4] The two features that matter:

**Unlimited ATM fee reimbursement, worldwide.** Use any ATM that displays the Visa, Plus, or Star logos (almost all of them do, and the logos are printed right on the machine) and Fidelity reimburses the operator's surcharge the same day, with no cap and no monthly limit. This is not limited to U.S. ATMs. Per Fidelity's own policy, your CMA "will automatically be reimbursed for all ATM fees charged by other institutions" at any ATM showing those logos, and this has always included international ATMs.[^4] This is why my ATM withdrawals in Guatemala and Peru came back reimbursed; it is the standard policy, not luck.

**No foreign transaction fees.** This one tripped people up for years, so here is the clean version. Fidelity used to charge a 1% foreign transaction fee, but only on point-of-sale purchases, never on ATM withdrawals. As of August 2024, Fidelity removed that 1% fee entirely, and all eligible accounts were updated automatically. You do not need to request a new card to get the no-fee treatment. So today the debit card charges nothing abroad, on purchases or ATM cash, and the exchange rate you get is the network's mid-market rate, which is competitive. One wrinkle remains: if a card terminal abroad (the device that reads your card at a store, restaurant, or ATM) offers to charge you in U.S. dollars instead of the local currency, this is called dynamic currency conversion. Always pick the local currency. Fidelity warns about this directly: if you choose to pay a foreign transaction in U.S. dollars, it "may be processed at a rate different than market exchange."[^4]

When you are at an ATM, always select "checking" as the account type, regardless of which Fidelity account the card is attached to. Selecting "savings" will often error out. This is a quirk of how Fidelity's debit card connects to the brokerage structure.

### Get the routing and account numbers

The Fidelity routing number for the CMA is 101205681. This is the same for every Fidelity CMA customer. Routing numbers identify the bank (or in this case the partner bank holding the deposit), not the individual customer. What identifies you is your account number, which is unique to you.

To find your account number: open the Fidelity app, tap into the CMA, then tap the three dots at the top of the screen above the account name and select "View Account & Routing Numbers." The full account number appears. On the website, you can find the same information from the [Cash Management dashboard](https://digital.fidelity.com/ftgw/digital/cashmanagement) by clicking into the account.

You use these the same way you would use your old bank's routing and account numbers. Direct deposit your paycheck here. Hook them up to any service that needs ACH: Venmo, PayPal, Cash App, credit card autopay, rent, insurance, utilities. One gap worth knowing about: Fidelity does not support Zelle, because the bank behind the CMA does not participate in the Zelle network.[^5] For most people this is minor (Venmo and Cash App both link to the CMA and cover the same person-to-person use case), but if you rely on Zelle specifically, the workaround is to keep it running through a traditional bank account and push money to Fidelity by ACH. Once everything is connected, your paycheck lands in the CMA, your bills come out of the CMA, and the cash in between earns the SPAXX yield. Treat this as your primary bank account.

One related habit: do not let cash sit idle in PayPal or Venmo. Move it back to the CMA the day it lands. PayPal and Venmo do not pay you interest on cash balances. They keep that money in their own accounts, earn interest on it themselves, and pocket the difference. That float is a meaningful part of how those companies make money. The more cash you let sit in their apps, the more you are donating to them. Transfer everything to the CMA the moment you receive it.

### Use Apple Wallet or Google Wallet

Add the debit card to your phone's wallet. The tokenization in those wallets means the merchant never sees your real card number; they get a one-time token that is useless if stolen. This is meaningfully more secure than handing over the physical card or typing the number into a website. It also protects you against card skimmers, which are devices criminals attach to ATMs and gas pump card readers to steal your card data when you insert the physical card. When you tap-to-pay with a phone wallet, there is no physical insertion and no card data for a skimmer to capture. Use the phone wallet whenever the option is available.

### Lock the debit card by default

Fidelity lets you instantly freeze the card from inside the app and unfreeze it when you need it. You manage this from [Manage Debit Cards](https://digital.fidelity.com/ftgw/digital/portfolio/atmdebitcard) on the website (or the "Manage debit cards" section of the app), where the Lock card option lives. I lock mine by default and only unlock it right when I am about to use it, then lock it again immediately after. This sounds paranoid, but here is why: debit card fraud protection is much weaker than credit card protection.

Under federal law (Regulation Z, the Truth in Lending Act), credit card fraud liability is capped at $50, and Visa and Mastercard's network zero-liability policies typically waive even that.[^6] You are essentially never out money for credit card fraud.

Under federal law (Regulation E, the Electronic Fund Transfer Act), debit card liability depends on how fast you report it:

- Report within 2 business days: $50 max.
- Report within 60 days: $500 max.
- Report after 60 days: potentially unlimited.[^6]

Worse, when fraud happens on a debit card, the money is gone from your checking account immediately while the bank investigates, which can take days or weeks. With a credit card, the disputed amount comes off your bill and you owe nothing while it is being looked into. This is why I run almost all of my spending through credit cards (covered in the [credit cards post](/blog/favorite-credit-cards)) and use the debit card only for ATMs, direct deposit, and the occasional merchant that does not accept credit cards. The CMA is my "bank," but the credit card is my "spending."

### Turn on text and email alerts

Notifications make the lock-by-default routine work. Fidelity can alert you on every debit card transaction, when the card is locked or unlocked, when your balance crosses certain thresholds, and on any significant account change. You set these up on the [Alerts page](https://alertable.fidelity.com/ftgw/digital/alerts) (on the website, Accounts & Trade → Alerts; in the app, under the alerts/notifications settings). The notifications are free. The peace of mind is real, and the speed of catching a fraudulent charge matters a lot for debit cards given how the liability cap works.

### Keep one traditional bank account open

The one thing Fidelity cannot do is take a cash deposit in person. Their investor centers are not bank branches: there are no ATMs that accept cash, and no way to walk in with $200 in twenties. For most people, this rarely matters, because you almost never deposit physical cash. But once in a while you might. So keep a free checking account open somewhere (most credit unions are free) for the rare cash deposit, then transfer the money over to Fidelity. That account does not need a balance. It just needs to exist. (Online-only banks like SoFi or Ally generally cannot take a walk-in cash deposit either, so for the cash-deposit use case specifically, a local bank or credit union is what you want.)

One small hack. Many fee-free accounts require some minimum activity to stay open: a couple of transactions per year, a login every so often, and the like. To satisfy this without thinking about it, I set up four small automatic transfers per year (two out, two in) between Fidelity and my credit union. The amounts are tiny, the credit union sees activity, and I never have to remember to do anything manually.

For non-cash deposits, you do not need the credit union. Fidelity supports mobile check deposit through the app: take a photo of a check front and back, up to $100,000 per day. I receive a paper check maybe once a year, and the mobile deposit takes about thirty seconds.

## Step 4: Open a Roth IRA

After the CMA is set up, open the Roth IRA. From the same "Open an Account" menu, choose Roth IRA. There is no fee, no minimum, and the application takes about five minutes. Fidelity's [Roth IRA page](https://www.fidelity.com/retirement-ira/roth-ira) walks through the details.

The 2026 contribution limit is $7,500. You have two reasonable ways to fund it:

- **Lump sum at the start of the year.** Transfer all $7,500 into the Roth in January and buy your funds immediately. Statistically this maximizes your expected return, because the market goes up most years and the earlier the money is invested, the longer it compounds.
- **Automatic monthly contributions from the CMA.** $625 a month, or $1,250 every other month, or whatever cadence matches your paycheck. This is easier on cash flow if you cannot front-load.

If you can comfortably lump sum, I would. If not, automation is the next best thing. The worst option is doing it manually and forgetting in any given year.

Then go in and pick what to actually buy with the contributions. [Post 3](/blog/how-i-pick-what-to-buy) covered this in detail. The boring answer is some combination of [FSKAX](https://fundresearch.fidelity.com/mutual-funds/summary/315911693) (Fidelity Total Market Index, expense ratio 0.015%) and [FTIHX](https://fundresearch.fidelity.com/mutual-funds/summary/31635V638) (Fidelity Total International Index, expense ratio 0.06%). The Roth IRA is where I hold Fidelity mutual funds rather than ETFs, because the tax inefficiency does not reach you inside a Roth and the mutual fund expense ratios are slightly lower.

## Step 5: Open an HSA (If You Are Eligible)

Two conditions have to be met. You have to be on an HSA-eligible high-deductible health plan, and you need to handle your employer's HSA arrangement first if there is one. Fidelity's [HSA page](https://www.fidelity.com/go/hsa/overview) and [HSA FAQs](https://www.fidelity.com/go/hsa/faqs) cover the mechanics.[^7]

The employer constraint. If your employer offers HSA contributions through payroll, and especially if they match those contributions, you probably have to use the HSA provider they have chosen, at least for the payroll-routed money. You cannot redirect your payroll deduction to Fidelity if your employer's payroll system only knows how to send it to (say) HealthEquity or Optum. But this is not the end of the story. You can still have a Fidelity HSA on the side, and you can periodically transfer money from your employer HSA to your Fidelity HSA (more on this below). Many people end up running both: contributions land at the employer HSA, then sweep over to Fidelity once or twice a year so the long-term balance grows in the better account.

A few notes specific to the Fidelity HSA:

**The core position is FDRXX, not SPAXX.** Fidelity uses FDRXX (Fidelity Government Cash Reserves) as the default cash position for HSAs, instead of SPAXX. The funds are nearly identical: both are government money market funds, both yield about the same, both function the same way. FDRXX just has a slightly lower expense ratio. There is no reason to change it. If you see FDRXX in your HSA and SPAXX in your CMA and wonder if you set something up wrong, you did not. That is how Fidelity does it.

**Transferring an existing HSA in.** Most employer-default HSAs charge monthly fees and limit you to a small menu of mediocre funds. Fidelity charges nothing and gives you the full brokerage menu. The transfer process is straightforward but slow, and you start it from Fidelity's [Transfer an HSA page](https://www.fidelity.com/go/hsa/transfer-hsa):

1. Open the Fidelity HSA first (do not close the old one yet).
2. From inside the Fidelity HSA, find the "Transfer" option and pick "Transfer an HSA from another provider."
3. You fill in your old HSA's account number and the provider's information. Fidelity initiates the transfer with the other side.
4. The transfer takes anywhere from 2 to 8 weeks depending on the other provider's speed. Most of that is the old provider dragging their feet. There is little you can do to speed it up.
5. The old provider may sell your investments and transfer cash, or they may transfer the actual fund shares ("in-kind"), depending on whether Fidelity supports those funds. Either way, this is a trustee-to-trustee transfer and is not a taxable event. You are not "withdrawing" the money; the IRS treats this as the same account just moving.

If your employer requires you to keep using their HSA for payroll contributions, you can leave a small balance at the employer HSA to keep it active and sweep the rest to Fidelity on whatever cadence makes sense (quarterly is reasonable).

Once it lands, set up automatic contributions if your employer does not already route them. The 2026 limit is $4,400 for self-only or $8,750 for family.

Then pick the actual investments. The HSA gets the full brokerage menu, so the answer is the same as the Roth: low-cost broad index funds. I would hold cash equal to your near-term medical exposure (deductible plus some buffer) in FDRXX, and invest the rest in something like FSKAX. [Post 2](/blog/where-each-dollar-goes#step-5-hsa-beyond-the-match) covers the strategy for how to think about HSA contributions and reimbursements.

## Step 6: Open a Taxable Brokerage

Last of the four main accounts: the taxable brokerage. From the Open an Account menu, choose "Brokerage Account." Same five-minute process. No fees, no minimums.

If you have room in your budget to invest beyond the tax-advantaged accounts, set up automatic transfers from the CMA to the brokerage and automatic recurring purchases of the funds you want to hold. There are no transfer fees and no fees for automatic recurring purchases. The recurring purchase feature is genuinely valuable: you can set up "buy $500 of VTI on the 15th of every month" and Fidelity will just do it forever, without you having to remember.

A reasonable concern people have about recurring investments: what if I do not have the balance to cover one? The good news is that Fidelity does not overdraft your CMA to make a recurring trade happen. If the cash is not there, the trade just fails. You get a notification, you can fix it, and the next month's recurring purchase tries again normally. So the worst case is a missed month, not a cascade of overdrafts.

[Post 3](/blog/how-i-pick-what-to-buy#etfs-vs-mutual-funds-where-i-put-each) covered what to actually buy in the taxable brokerage. The headline rule is ETFs only inside taxable accounts, for the tax-efficiency reasons covered there.

## Step 7: Set Your Beneficiaries on Every Account, Right Now

This is the single most-skipped step in personal finance, and it takes about five minutes.

Every account you just opened (CMA, Roth IRA, HSA, taxable brokerage) needs a named beneficiary. Without one, if something happens to you, the account can go through probate, which is slow, expensive, and public. With one, the account transfers to your beneficiary directly, usually outside of probate.

In the app or on the website: Accounts → select an account → Profile or Beneficiaries → add your beneficiaries. You can also manage them from Fidelity's [Beneficiaries Summary](https://www.fidelity.com/customer-service/how-to-update-beneficiaries). Repeat for every account. Update them whenever your life changes (marriage, divorce, kids, death in the family). I cannot stress this enough. Do this before you do anything else interesting on the platform.

## Optional: Open a Donor-Advised Fund

If you donate meaningful amounts to charity each year (or expect to in years when your income spikes), Fidelity Charitable's donor-advised fund (DAF, branded as the "Giving Account") is worth knowing about. It is a separate Fidelity entity but uses the same login. Details and current fees are on the [Fidelity Charitable site](https://www.fidelitycharitable.org/giving-account/what-it-costs.html).

The way a DAF works: you contribute money or appreciated stock to the DAF in a given tax year. You get the charitable deduction that year (subject to the usual IRS limits). The money sits inside the DAF, invested in whatever funds you choose, growing tax-free. You then "recommend grants" out of the DAF to actual charities over time, on whatever schedule you want. The charities receive the money directly from Fidelity.

A few reasons this is useful:

- **You can deduct in a high-income year and give in lower years.** If you have a big bonus year, you can put a chunk into the DAF in December and deduct it against this year's income (within IRS limits), then take your time deciding which charities to support.
- **Donating appreciated stock is much more tax-efficient than donating cash.** You avoid the capital gains tax you would have paid on the sale, and you still get to deduct the full market value. [Post 5](/blog/taxes-are-the-quiet-variable#donating-appreciated-stock-to-charity-and-the-bunching-strategy) covers this in more detail.
- **You only fund it when you want to.** The account itself is free to open and there is no minimum balance.

The fees on Fidelity Charitable are the greater of $100 per year or 0.60% of the account balance, charged when there is a balance.[^8] So you can open the DAF today and pay nothing until you actually fund it. The 0.60% admin fee is competitive with other DAFs; total cost including the underlying investment expense ratios typically runs close to 1% per year. Worth opening if you give meaningfully. Not worth opening if you give little.

## Optional: Apply for the Fidelity Visa

[Covered in the credit cards post](/blog/favorite-credit-cards). The short version: the Fidelity Rewards Visa Signature is a 2% cash back card on everything, with no annual fee, no foreign transaction fees, and the cash back deposits directly into a Fidelity account of your choice (I send mine to the taxable brokerage). It pairs naturally with the rest of the Fidelity setup. You can read the details and apply on the [Fidelity Rewards Visa page](https://www.fidelity.com/spend-save/visa-signature-card).[^9]

One important practical note before you apply: if you freeze your credit with the bureaus (I do, as a precaution against identity theft), you have to unfreeze before applying or the application will be declined. Fidelity's own application page says plainly to remove any credit bureau freezes before applying.[^9] Unfreeze, apply, then re-freeze once you are approved.

A note on the credit-score side, because the mechanics here are widely misunderstood. The card is issued by Elan Financial Services, not by Fidelity. Elan does the underwriting and makes the approval decision, and Fidelity is careful to say it is not involved in that decision and cannot guarantee any existing customer will be approved. The published reviews peg the card around a 720+ FICO for good approval odds. So on paper, being a Fidelity customer is not a guaranteed path around the credit requirement.

In practice, though, the existing relationship clearly matters, and two things make that concrete. First, Fidelity uses a preapproval process for this card: it runs a soft credit check, and if you look like a likely fit, it invites you to apply (often by mail). Second, when people apply, Elan's underwriting appears to weigh the Fidelity relationship directly. On credit forums, approved applicants regularly report that Elan asked about their Fidelity balances during the application, and there are documented approvals with scores below the 720 headline when the applicant had real assets at Fidelity (a funded 401(k), a CMA, and so on). The common advice in those threads is the same: open and fund a Fidelity account, give it a few months, and your odds improve.

That is exactly how it went for my friend Joshua. He is great with money but young, so his credit history was thin. He had been using Fidelity for a while (CMA, 401(k), Roth IRA, the whole setup), got a preapproval invitation in the mail, applied, and was approved with a modest starting credit limit. His thin credit history would have been a tougher sell as a cold applicant; the established relationship with Fidelity is what tipped it. None of this is a guarantee, since Elan makes the call on its own criteria, but if you are responsible with money and have assets at Fidelity, it is worth applying if you receive a preapproval invitation. (One thing Joshua does that is worth copying: if he is about to bump against his credit limit, he pays down part of the statement balance before the due date so he can keep charging and keep earning the 2%.) Shoutout Joshua. He is one of the few who actually listened and acted on my financial advice.

## How to Actually Research a Fund

A skill worth having once everything is set up: how to look at a fund and decide whether to buy it.

On the Fidelity site or app, the cleanest path is Research → ETFs (or Mutual Funds) → search for the ticker. You can also go straight to Fidelity's [mutual fund screener](https://fundresearch.fidelity.com/fund-screener) or [ETF screener](https://www.fidelity.com/etfs/overview). The ticker is the short symbol for the fund: VTI, FSKAX, SCHD, and so on. The fund's page has everything you need:

- **Expense ratio.** The fee. Under 0.10% is great. Compare across similar funds before deciding.
- **Top 10 holdings.** What the fund actually owns. Useful to check whether two funds overlap heavily (for example, owning both VTI and VOO means a lot of the same big companies twice).
- **Sector breakdown.** What percentage is in tech, finance, healthcare, and so on. This is where you spot concentration risk.
- **Weighted-average P/E ratio.** The price-to-earnings ratio across the fund's holdings, weighted by position size. Helpful as a sanity check on whether the fund is expensive or cheap by historical standards. Under 30 is reasonable; over 40 is stretched.
- **Historical returns.** Look at 10-year and "since inception" numbers, not 1-year. Past performance is not predictive, but it tells you whether the fund has actually existed across a downturn.
- **Distributions.** How much the fund has paid out in dividends and capital gains historically. The Vanguard site (linked in [Post 3](/blog/how-i-pick-what-to-buy#the-tax-side-why-stocks-are-tax-favored)) is the cleanest place to check the qualified dividend income percentage on Vanguard funds.

You do not have to look at all of these every time. But before you click buy on a new position, spend a couple of minutes on the fund page. The information is all there.

## A Few Setup Things Worth Doing Once

- **Recurring investments.** From any brokerage account: schedule automatic purchases of any fund on any cadence. Set it and forget it. This is the single best behavioral hack in personal finance, because the money goes into the market before you can talk yourself out of it. As noted in Step 6, a missed month from insufficient balance just fails silently; it does not overdraft.
- **Tax document delivery and TurboTax integration.** Switch all tax documents to electronic delivery (less paper, faster delivery). At tax time, TurboTax can log directly into Fidelity and pull your 1099-DIV, 1099-INT, and 1099-B automatically. You enter your Fidelity credentials once inside TurboTax and the forms import in a few seconds. This saves hours and avoids data-entry mistakes.
- **Save your statements.** Fidelity stores statements going back years, but I download a PDF copy of each year's December statement for each account and save them in a personal folder. Brokerages have changed hands, gone under, and been migrated more than once historically. A local copy of the statement is the only thing you actually own that proves your balance and basis on a given date. The same applies to year-end 1099s.
- **Full View.** Fidelity lets you link external accounts (other brokerages, bank accounts, credit cards, mortgages) into a single dashboard. It is read-only; you cannot move money in or out of those accounts from Fidelity. But it is useful for seeing your full picture without logging into five different sites. Settings → Manage Accounts → Add External Account.

## Talking to a Real Person

Fidelity's customer support is genuinely good. The phone number is 1-800-343-3548, and they pick up fast. Use it when:

- You are transferring an HSA or 401(k) from another provider and the other side is being slow.
- You have a question about your employer's 401(k) menu, vesting schedule, or contribution mechanics that is faster to ask than to figure out from PDFs.
- You have any question about your credit card or debit card (charge disputes, lost cards, travel notifications).
- You want to make sure a beneficiary setup or a Roth contribution actually went through correctly.
- You are doing anything tax-sensitive (Roth conversion, backdoor Roth, mega backdoor Roth) and want a second pair of eyes.

I have called Fidelity many times across years and never had a bad experience. The reps are well-trained, they do not pressure you to buy anything, and they can usually solve whatever you called about within one call. They also follow up. Once when I inquired about a 401(k) transfer, a human advisor proactively called back a few days later and left a voicemail asking if there was anything else he could help with. That is not standard at most financial institutions.

If you cross a certain account balance threshold, you also get assigned a free dedicated advisor. Take it if you are offered. Just be wary of any nudges toward higher-expense-ratio funds (covered in [Post 3](/blog/how-i-pick-what-to-buy#expense-ratios-in-dollars)).

## The Takeaway

The sequence:

1. Create your Fidelity login. Turn on 2FA.
2. Connect your bank.
3. Open the Cash Management Account. Set SPAXX as the core. Order the debit card. Direct deposit your paycheck. This is now your bank.
4. Open a Roth IRA. Lump sum or set up automatic monthly contributions.
5. Open an HSA if eligible. Transfer in any existing HSA from a worse provider.
6. Open a taxable brokerage. Set up recurring purchases.
7. Set beneficiaries on every account, right now.
8. Optional: open the DAF, apply for the Fidelity Visa.

Once this is all wired together, the rest of your financial life mostly takes care of itself. Your paycheck lands in the CMA, your bills pay themselves out of it, your Roth and brokerage contributions happen automatically, and the cash that is not doing anything is still earning the SPAXX yield. The whole machine runs on autopilot.

[Post 5](/blog/taxes-are-the-quiet-variable) is the last one in the series: the tax mechanics that have earned brief mentions throughout, including the backdoor Roth, the mega backdoor Roth, tax-loss harvesting, asset location, and a few other techniques that are worth real money over a career.

---

*I am not a licensed financial advisor. This is my actual setup and reasoning, not personalized advice.*

## Sources

[^1]: Fidelity Investments, "Moving Money FAQs," fidelity.com/spend-save/faqs-move-money.
[^2]: Fidelity Investments, "Fidelity Cash Management Account" product page, fidelity.com/spend-save/fidelity-cash-management-account.
[^3]: Fidelity Government Money Market Fund (SPAXX) prospectus and fund page.
[^4]: Fidelity Investments, "ATM/Debit Card FAQs," fidelity.com/spend-save/faqs-atm-debit-card.
[^5]: Fidelity Investments, "Cash Management Account FAQs," fidelity.com/spend-save/faqs-cash-management-account.
[^6]: Regulation Z (12 CFR Part 1026) and Regulation E (12 CFR Part 1005), CFPB.
[^7]: Fidelity Investments, "Fidelity HSA FAQs," fidelity.com/go/hsa/faqs.
[^8]: Fidelity Charitable, "Giving Account Fees," fidelitycharitable.org/giving-account/what-it-costs.html.
[^9]: Fidelity Investments, "Fidelity Rewards Visa Signature Card" and card FAQs, fidelity.com/spend-save/visa-signature-card.
