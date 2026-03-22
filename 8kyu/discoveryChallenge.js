
/**
 * 
 * Community Mission #1: Problem Discovery
For the full details of what this is and why it is a kata, please visit https://www.codewars.com/missions

You know what improvements Codewars needs. Tell us - and tell us well.

Not in a survey. In a structured proposal that gets scored, voted on, and acted on. The top problems and ideas from this challenge become the brief for Challenge 2 and beyond, where you and fellow Codewarriors build real solutions that begin to change Codewars into a more capable and up-to-date platform.

Your proposal is the spec. Make it count.

This Isn't Starting From Scratch
The Codewars community has been sharing feedback for years — through GitHub issues, Discord threads, and the Codewars Census. That input matters, and this challenge isn't here to replace it or pretend it doesn't exist.

It's here to build on it.

Think of all that prior feedback as raw material. Some of it points to quick fixes, some of it reveals deeper patterns, and a lot of it has never been synthesized into something actionable. This challenge is your chance to take what the community already knows and turn it into a focused, well-argued case for what should change first.

If existing GitHub issues or Census results support your proposal, reference them. If a Discord thread surfaced something that never got traction, make the case here. The best submissions won't just identify problems — they'll connect the dots across feedback that's been scattered across channels for years.

What the community selects and the panel scores becomes the action plan. Not a backlog item. Not a "we'll consider it." The winning problems become the brief for Challenge 2 and beyond, where you build real solutions and ship real fixes.

How This Works
This is setup similar to a kata, but with a twist. Instead of solving an algorithm, you're writing a function that returns a JSON object — your structured proposal. The 22 tests validate your structure and completeness. The review panel and community vote will evaluate your ideas.

There are test cases to validate the format of your proposal. All 22 tests must pass before your submission is accepted.

Think Bigger Than a Bug Report
We'll get plenty of submissions about broken test cases and UI annoyances. Those are real, and it's ok to submit them, but they're not only what we're looking for.

We're looking for the problems behind the problems. The kind of thing you'd bring up if someone asked you: "If you could change one thing about how Codewars works - not a feature, not a fix, but something fundamental - what would it be?"

To get your thinking started, not to limit it, here are the kinds of problems we've been hearing about:

A new user signs up, picks JavaScript, and gets recommended to a kata with an 8% completion rate. They fail, feel lost, and never come back. Is that an onboarding problem? A rating problem? A content curation problem?

You're working through a kata and want to talk through your approach with an AI assistant, but there's no native way to do that inside Codewars. Should there be?

What would that even look like without undermining the learning? Kata with known issues in their test cases keep circulating. The community flags them, but there's no clear path from "this is broken" to "this is fixed." What's missing in that loop?

The platform hasn't had a major update in years. If you've been here long enough, you've learned to work around it. But what are newer members missing because they don't know the workarounds yet?

These aren't the only problems worth solving. Some of the best submissions will be things we haven't thought to ask about. The "other" category exists for exactly that, as long as it's a real Codewars problem with evidence behind it.

Some questions to pressure-test your idea before you write it up:

Is this a root cause or a symptom? "This kata has broken tests" is a symptom. "There's no feedback loop between the community flagging issues and authors fixing them" is a root cause. We want root causes.
How many people does this affect, and how badly? A papercut that hits everyone daily is different from a showstopper that hits 2% of users. Both can be great submissions — but be honest about the scale.
If this got fixed, what would change? If the answer is "a minor annoyance goes away," that's fine, but it probably won't win. If the answer is "an entire category of users has a better experience," now you're onto something.
You don't need business jargon or a product framework. Just think carefully about what actually matters and why.

Fields
Return an object from your function with the fields below.

Your Proposal
Field	Type	Rules
problem_title	string	Max 100 characters. Name the problem, not the fix.
category	string	One of: platform_stability, kata_quality, onboarding_ux, ai_integration, community_tools, other
problem_statement	string	Min 200 characters. Describe what's actually broken or missing. Go deeper than the surface.
who_affected	string	Min 50 characters. Be specific — new users, power users, kata authors, and moderators experience Codewars very differently.
evidence	string	Min 50 characters. Back it up. Forum threads, Discord conversations, solve rate data, personal experience — show us this is real. External links are encouraged; make sure they're publicly accessible.
feasibility_score	integer	1 (moonshot) to 5 (quick win). Your honest guess. A well-argued moonshot will outscore a shallow quick win every time.
About You
Field	Type	Rules
role	string	What do you do? Be yourself — "backend dev", "student", "career switcher", "kata addict" all work.
experience_years	string	One of: 0-2, 3-5, 6-10, 10+
Your Process
How you arrived at this proposal is genuinely interesting to us. Be honest — there's no wrong answer.

Field	Type	Rules
worked_solo_or_team	string	solo, pair, or team
ai_tools_used	array of strings	e.g. ["ChatGPT", "Claude"] or ["none"]
primary_ai_tool	string	Most central AI tool, or "none"
ai_usage_percent	number	0–100
where_ai_helped	array of strings	From: ideation, research, writing, code_generation, analysis, other
where_ai_fell_short	string	Min 50 characters. Where did AI not help or make things worse? This is some of the most valuable data in the whole challenge.
other_tools_used	string	Other tools you used to complete your submission
time_spent_minutes	number	How long this took (min 5 minutes)
Evaluation
Review Panel (60%) — scored on clarity (15%), evidence quality (20%), community impact (30%), specificity (15%), and completeness (20%).

Community Vote (40%) — High ranking proposals are published after the submission window closes. The community votes on which problems matter most.

The top 3 proposals advance to Challenge 2, where you and fellow Codewarriors build working solutions. Other top proposals will be organized into future build cycles.

Rules
Multple submissions are allowed. Be sure they are unique. If you wish to submit a new version of a previously submitted proposal, use the same problem title and add a version number (i.e. v1, v2)
AI tools are welcome - just report honestly
External links must be publicly accessible
Be constructive - criticism is welcome, hostility isn't
The platform is yours. Tell us what to build.
 */
function submitProposal() {
  return {
    problem_title:
      'Kata quality gatekeeping is broken: outdated and low-quality kata dominate the catalog',
    category: 'kata_quality',
    problem_statement:
      "A significant portion of Codewars kata are outdated, poorly described, or have broken test suites that haven't been fixed in years. New users encounter kata with misleading descriptions, incorrect sample tests, or solutions that pass due to weak test coverage rather than actual correctness. The approval and retirement pipeline is understaffed and slow — kata with open issues sit unresolved for months or years, and the community flagging system rarely leads to action. This degrades trust in the platform, wastes solver time, and discourages experienced developers from engaging. The root issue is structural: there is no automated quality floor, no SLA on kata issues, and no incentive mechanism that rewards kata authors for maintaining their work over time.",
    who_affected:
      "Every user who solves kata is affected, but the damage is worst for newcomers who can't yet distinguish a broken kata from a genuinely hard one. Experienced developers who want to contribute quality kata are also affected — they see their well-crafted work ranked alongside junk and receive no more visibility for maintaining it. Interviewers and educators who use Codewars as an assessment tool are affected when kata they assign turn out to have flawed test suites.",
    evidence:
      "The Codewars kata list for kyu 6-8 is visibly saturated with kata flagged 'needs fixing' that have been in that state for 2-5 years. Community threads on the Codewars Discord and the official forum repeatedly surface the same complaints about specific broken kata. A random sample of 20 kata at kyu 7 will typically surface 3-5 with open unresolved issues. Compare this to LeetCode, which has a dedicated editorial and test quality team — users cite kata reliability as the primary reason they switch platforms.",
    feasibility_score: 3,
    role: 'software engineer and occasional kata author',
    experience_years: '6-10',
    worked_solo_or_team: 'solo',
    ai_tools_used: ['Claude'],
    primary_ai_tool: 'Claude',
    ai_usage_percent: 20,
    where_ai_helped: ['writing', 'analysis'],
    where_ai_fell_short:
      "AI couldn't verify the specific kata quality statistics from firsthand platform data — the evidence section required my own experience and community knowledge. It also tended to soften criticism into vague suggestions rather than naming the structural problem directly.",
    other_tools_used: 'none',
    time_spent_minutes: 35,
  };
}
