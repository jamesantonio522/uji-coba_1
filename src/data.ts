import { Article, Comment } from './types';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'hero-1',
    title: 'Supreme Court Victory for Fed Still Leaves It Vulnerable to Trump',
    summary: 'President Trump promised to “take appropriate action immediately” against Lisa Cook, even as the court affirmed that Fed officials can be fired only for cause.',
    content: `WASHINGTON — The Supreme Court on Monday handed a major constitutional shield to the Federal Reserve, ruling 6-3 that its governors cannot be fired at will by the president. Yet the decision, while nominally a triumph for central bank independence, has immediately ignited a volatile political standoff that could reshape the future of monetary policy.

Hours after the ruling, President Donald J. Trump doubled down on his long-standing hostility toward Federal Reserve Governor Lisa Cook, promising to “take appropriate action immediately.” The president argued that while the court affirmed Fed officials can only be fired "for cause," the administration believes its standard of "inefficiency, neglect of duty, or malfeasance in office" is broad enough to justify Cook's removal.

The decision represents a delicate compromise in high-stakes constitutional law. In twin opinions, Chief Justice John G. Roberts Jr. attempted to draw a firm line between the Fed—whose insulated monetary policy decisions are vital to economic stability—and other administrative regulators who execute direct executive power.

"The Federal Reserve occupies a unique sanctuary in our constitutional architecture," the Chief Justice wrote. "To subject its decision-makers to the shifting winds of electoral politics would destroy the predictability and independence that underpins public trust in our currency."

**A High-Stakes Legal Battleground**

Despite the clear defense of Fed autonomy, legal scholars say the ruling leaves several key questions unanswered. Specifically, what constitutes "cause" remains highly debated. The White House legal counsel is reportedly preparing a memorandum arguing that Governor Cook’s public statements and voting record on interest rates constitute "neglect of duty" to the American public, a claim that economists and past Fed chairs have described as absurd and dangerous.

"This is an unprecedented attack on central bank independence," said Sarah Binder, a political scientist at George Washington University. "If a president can fire a Fed governor simply for voting for high interest rates under the guise of 'neglect of duty,' then the Fed's independence exists only on paper."

Federal Reserve Chair Jerome H. Powell, speaking at an economic forum in Chicago, declined to comment directly on the litigation but reiterated the central bank's unwavering commitment to its dual mandate of maximum employment and price stability. "We are focused on our job," Mr. Powell said. "Our decisions will continue to be guided by data, not political influence."`,
    readTime: '5 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE0DB3yp99xqHQZ5lW2wzec2fY8fZbrv2KSfYbKPsFeGTL7LnlShVUJUF612prHbdkMClaqQM79KBcl9bhCAWnArCvrPAv7a5d-mYgqTOVx__kdCjbPPSrYrnWKc9wteq9uDjU4ixSJ97w9MnCDOkRZsyDIjjGSBDkzJc2EaqWsJt9Wunazkx-f0Gb2w4s30I610B-tR-zvB_Xudt6BsCjJiIiLDKZEPRtwiGG_AOwZtZehHVmajhTBVPeyiQXYKZtDxz5ibfUGyhd',
    imageAlt: 'A grand, imposing architectural shot of the United States Supreme Court building during high noon. The massive white marble columns are rendered with extreme detail and high contrast, reflecting a sense of judicial authority and institutional permanence. The sky is a stark, cloudless blue, creating sharp shadows that emphasize the building\'s neoclassical geometry.',
    section: 'Home',
    byline: 'By Adam Liptak and Jeanna Smialek',
    date: 'Monday, June 29, 2026',
    isBreaking: true
  },
  {
    id: 'story-2',
    title: 'Justices Expand Trump’s Power to Fire Officials',
    summary: 'In twin rulings, the Supreme Court affirmed the Fed’s independence and said its leaders could not be fired at will, but said President Trump could fire other regulators.',
    content: `WASHINGTON — Even as it preserved the Federal Reserve's firewall, the Supreme Court delivered a sweeping victory to the unitary executive theory in a companion case, vastly expanding the president's authority to dismantle and reorganize independent federal regulatory bodies.

By a 5-4 vote, the conservative majority ruled that independent agency heads who do not wield monetary policy authority—such as the leaders of the Consumer Financial Protection Bureau (CFPB) and the Federal Trade Commission (FTC)—are fully answerable to the chief executive and can be terminated without cause.

Justice Clarence Thomas, writing for the majority, asserted that the Constitution vests all executive power in the President alone. "Independent agencies that operate beyond the direct supervision of the executive create a shadow branch of government accountable to no one," Justice Thomas wrote. "Except in highly specialized fields like central banking, independent regulators must answer directly to the President."

The decision marks a major escalation in the decade-long conservative legal campaign to weaken the "administrative state." Legal experts warned it could trigger an immediate wave of firings as the administration looks to install loyalists in powerful oversight positions across Washington.

"This is the big one," said David Cole, a constitutional law professor. "It effectively signals that most of the alphabet-soup regulatory agencies in Washington are no longer independent in any meaningful sense. Their leaders serve at the pleasure of the President."`,
    readTime: '5 min read',
    section: 'Home',
    byline: 'By Charlie Savage',
    date: 'Monday, June 29, 2026'
  },
  {
    id: 'story-3',
    title: '‘No One’s Coming to Save Us but Us’: Gen Z Runs for Office',
    summary: 'Fed up with older politicians, a new generation is mounting campaigns for local and state office, bringing fresh strategies and social-media savvy.',
    content: `LOS ANGELES — Across the country, a rising wave of Gen Z organizers, activists, and students are taking matters into their own hands. Frustrated by gridlock in Washington and feeling neglected by an aging political establishment, candidates under 26 are launching long-shot, grassroots bids for city councils, school boards, and state legislatures.

At the center of this movement is 23-year-old Maya Patel, who is running for a competitive seat in California\'s State Assembly. Patel, whose campaign relies heavily on viral TikTok explainers and small-dollar donations, argues that younger Americans face unique, existential crises—from climate change to crushing rent and student debt—that older politicians simply do not feel with the same urgency.

"For too long, we've been told to wait our turn," Ms. Patel said, addressing a crowd of volunteers in a cramped campaign office. "But the crises we're living through aren't waiting. No one's coming to save us but us. We have to be in the room where the laws are written."

While political consultants have historically dismissed youth campaigns as naive, Gen Z candidates are proving surprisingly formidable. They are bypassing traditional party gatekeepers, utilizing advanced digital organizing tools, and mobilizing an electorate that is notoriously difficult to reach.

The challenges are still immense. Many face skepticism over their age and experience, and raising money remains a primary hurdle. Yet, activists say the goal is bigger than winning a single election—it is about permanently shifting the horizon of what is politically possible.`,
    readTime: '5 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLt0EkQneDmIITXXSVhgsuJjZJS4P2GUc--UtyvYtm9zqBZzf9UuMvJ9mE6q7A6dqfoAlQE4mxfaXbvftGID2DNRbzSWoeJJFlRli4lDgeQXXnsuZ99yengj1zDCjV2dq-FhhWEQOqM-JJ75j74vC_-xSNz_HK97Stez0BB24WbiJobFW-kXa8vXod_tD7sIOWKEmI0zjPzFnrD4dRpV206HZdH3it3WZNJ6zql1XF_P7p1cOa5t6R1-xs8',
    imageAlt: 'Portrait of a young Gen Z woman candidate standing confidently outside a community center, with a serious, determined gaze. The background shows volunteers with clipboards talking to local residents.',
    section: 'Home',
    byline: 'By Astor Astor',
    date: 'Monday, June 29, 2026'
  },
  {
    id: 'story-4',
    title: 'California Hopes to Speed Up Election Results With $40 Million Infusion',
    summary: 'State officials plan to invest millions to modernize voting equipment and hire more staff to count mail-in ballots faster, hoping to reduce days of post-election suspense.',
    content: `SACRAMENTO — California, notorious for taking weeks to finalize its election returns, is launching an aggressive $40 million initiative to overhaul its vote-counting infrastructure and speed up future results.

The emergency funding, approved by the state legislature, will be distributed to county election offices to purchase high-speed ballot scanners, recruit additional signature-verification staff, and establish automated tracking systems for mail-in ballots.

Secretary of State Shirley Weber stated that the move is essential not only for administrative efficiency but for preserving democratic trust. "The long delays in counting our ballots leave a vacuum that bad actors fill with conspiracy theories and misinformation," Weber said. "We need to count every single vote accurately, but we must also do it within a timeframe that maintains public confidence."

Because California automatically sends mail-in ballots to every registered voter and accepts ballots postmarked by Election Day that arrive up to seven days later, the tallying process is naturally slower than in states that rely heavily on in-person voting. Election directors say the new technology will allow counties to process hundreds of thousands of mail-in envelopes per hour, significantly speeding up the initial tallies without sacrificing verification protocols.`,
    readTime: '3 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLtBzbTF5Scx3xWkSGTGEZQlCaXWcwInmJSJkcufwfpcj5u20BQrmNdnPCQ9Kk7QsqVzhe28b3KOsB39O5aXr0abPXcF1u3sIyD67IDyIVHKvp6t31GosidarAHiIAonLmrfCpIrM77qFZJQWSjjL8nteNrze_lCQMdc1peoMim5XO5VQMB4-OEO8YQIp2unoRwAF0OQoeAXxfqREj81gkk6rrgYkSx9gUdEZ_V3cNp1QqVHnv-BIeB2nute',
    imageAlt: 'Election workers in blue vests diligently sorting and scanning white mail-in paper ballots inside a spacious county election center under bright, soft lights.',
    section: 'Home',
    byline: 'By Shawn Hubler',
    date: 'Monday, June 29, 2026'
  },
  {
    id: 'story-5',
    title: 'Paraguay Shocks Germany in Penalty Kicks to Eliminate the Four-Time Champions',
    summary: 'Germany, one of the tournament favorites, has been knocked out in the round of 32.',
    content: `MUNICH — In one of the most astonishing upsets in World Cup history, Paraguay survived a grueling onslaught from Germany to advance to the round of 16, winning 4-3 in a dramatic penalty shootout after a 1-1 draw.

For 120 minutes, Germany dominated possession and registered 28 shots, but met an impenetrable brick wall in Paraguayan goalkeeper Roberto Fernández, who pulled off nine world-class saves. Paraguay took a shock lead in the first half on a blistering counterattack finished by Julio Enciso, before Germany equalized in the 81st minute through a powerful header from Jamal Musiala.

As extra time expired, the tension in the stadium was palpable. In the shootout, Fernández blocked Germany's first and fourth penalties, allowing Paraguayan veteran Derlis González to step up and calmly slot home the historic winning spot-kick.

"We knew we had to suffer," Fernández said through tears. "But we believed in ourselves, we believed in our country. This is a dream come true."

For Germany, the exit marks a devastating crisis of confidence. The four-time champions will return home with deep questions surrounding their tactical approach and the future of their national team program.`,
    readTime: '4 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLtF4yLwefnAvHqp0TcZerjYsZBR1R_3RJL4hOipwhv-z1nRQtGfzHQ4MVqLz4Pj0gnLT7aUQMNontXwQRW-eD9BBNX7SwkAmBrWWQT4DYJsU3YF_eLIqm-u1QT2fiah3K0WekVfttl5KmeCjn8SVXSeG8jJlWWYakt3mjqvttKLuEhphZhAywOSo9QrEO8YsJ8mlX7Sl8cHBxuvNinWUyGBKe9eE20XTPa2LQRo9GXDbZet1cw06QwP62M',
    imageAlt: 'A high-intensity action shot of Serena Williams on the green grass of Wimbledon.',
    section: 'Sports',
    byline: 'By Rory Smith',
    date: 'Monday, June 29, 2026'
  },
  {
    id: 'story-6',
    title: 'Seared Zucchini and Halloumi in Red-Wine Vinaigrette',
    summary: 'This elegant dish combines perfectly charred, tender zucchini with salty, warm pan-seared halloumi, finished with a bright and punchy vinaigrette.',
    content: `Charred zucchini is wonderful on its own, but when layered with thick slabs of warm, salty halloumi cheese and dressed in an herbaceous, puckery red-wine vinaigrette, it transforms into an unforgettable summer centerpiece.

The key to this recipe is achieving a deep, caramelized sear on both the zucchini and the halloumi. Cook them in a dry cast-iron skillet over high heat—this creates a crisp crust while keeping the interior juicy and tender.

**Ingredients:**
- 3 medium zucchini, sliced into 1/2-inch thick coins
- 1 block (8 oz) halloumi cheese, sliced into 1/4-inch planks
- 4 tbsp extra-virgin olive oil
- 3 tbsp red-wine vinegar
- 1 clove garlic, finely grated
- 1/4 cup fresh dill and mint, chopped
- Flaky sea salt and freshly ground black pepper

**Instructions:**
1. Whisk the olive oil, red-wine vinegar, grated garlic, herbs, and a pinch of salt and pepper in a small bowl to make the dressing.
2. Heat a cast-iron skillet over medium-high heat. Toss the zucchini with 1 tablespoon of olive oil. Sear the zucchini coins for 3 minutes per side until deeply browned. Transfer to a serving platter.
3. Pat the halloumi dry. Sear in the hot skillet (no oil needed) for 1-2 minutes per side until a golden-brown crust forms.
4. Layer the warm halloumi among the zucchini. Spoon the vinaigrette generously over the top and garnish with extra fresh herbs. Serve immediately while the halloumi is warm.`,
    readTime: '15 min prep',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLu-kFim7WsAkU3jdkpAWQITvGskGulQKEP3-4R7r-CRRfOPTrQa-0C-wRMcfReIDbhiga4OwVws7TnGFqyTlu71E-KCesUMKKer4Y2gIM5CMnF3jGU_dsq9ZnfPjWJfqqGnjP6vLgOwKO2FZa8RtWxcQP3JruZ6KPV0wIEC85SO4aBmBPj7mEak7Bhh-6Vfag8FgKr9h8yeTyqYdkdqvjh91mD2RqripUKSfVq5HI6BqJDtDiI3fqdbigvc',
    imageAlt: 'A beautiful plate of seared green and yellow zucchini with crispy browned slices of halloumi cheese, sprinkled with fresh dill, mint, and drizzled with vinaigrette.',
    section: 'Cooking',
    byline: 'By Melissa Clark',
    date: 'Monday, June 29, 2026'
  },

  // WORLD SECTION ARTICLES
  {
    id: 'world-1',
    title: 'European Union Moves to Accelerate Climate Target Timeline',
    summary: 'Under mounting pressure from climate scientists, the bloc outlines a plan to reduce emissions by 65 percent by 2030, a sharp rise from previous promises.',
    content: `BRUSSELS — The European Commission announced a dramatic acceleration of its green agenda, proposing a legally binding target to cut greenhouse gas emissions by 65% by the end of the decade.

The current target of 55% was already considered ambitious by several heavily industrialized member states. However, following a series of unprecedented heatwaves and severe flooding across Southern Europe, political momentum has shifted rapidly.

"The climate emergency is no longer a future prediction; it is unfolding in real-time in our towns and villages," European Commission President Ursula von der Leyen said in a special address to the European Parliament. "We must move faster, innovate harder, and lead the global transition to a sustainable economy."

To fund the transition, the EU will mobilize an additional €120 billion in green bonds, aimed at accelerating the phase-out of coal-fired power stations and expanding public transit networks. However, the proposal has already met strong resistance from coal-dependent member states in Eastern Europe, setting up a fierce legislative battle.`,
    readTime: '4 min read',
    section: 'World',
    byline: 'By Somini Sengupta',
    date: 'Monday, June 29, 2026'
  },
  {
    id: 'world-2',
    title: 'Japan Explores Sub-Ocean Hydrogen Storage as Clean Energy Pivot',
    summary: 'A new pilot project off the coast of Fukuoka aims to store pressurized hydrogen gas in deep submarine caverns, providing a massive battery for the nation\'s power grid.',
    content: `TOKYO — Seeking to solve the persistent storage problem of renewable energy, Japanese engineers have begun constructing a pioneering hydrogen storage facility inside deep basalt caverns beneath the Pacific Ocean floor.

The project, backed by a consortium of heavy industries and the Japanese government, uses excess electricity generated by offshore wind farms during off-peak hours to split water into hydrogen and oxygen. The hydrogen is then pumped into reinforced underwater caverns, where it can be stored indefinitely and converted back into electricity when demand spikes.

"Sub-ocean storage offers a natural containment pressure and keeps volatile hydrogen away from populated land areas," said Kenji Tanaka, lead engineer of the project. "If successful, this could serve as the cornerstone of Japan's clean energy grid by 2035."`,
    readTime: '6 min read',
    section: 'World',
    byline: 'By Motoko Rich',
    date: 'Monday, June 29, 2026'
  },

  // U.S. SECTION ARTICLES
  {
    id: 'us-1',
    title: 'Yellowstone Reports Historic Grizzly Bear Population Revival',
    summary: 'Thanks to decades of strict federal protections, the iconic grizzly population in the Greater Yellowstone Ecosystem has reached levels not seen in over a century.',
    content: `YELLOWSTONE NATIONAL PARK — Wildlife biologists are celebrating an extraordinary conservation milestone: the grizzly bear population in the Greater Yellowstone Ecosystem has officially surpassed 1,100 individuals, marking a complete recovery from near-extinction fifty years ago.

In 1975, when the bears were first listed under the Endangered Species Act, there were fewer than 136 grizzlies remaining in the region. The subsequent decades of careful management, trash insulation, and public education have slowly rebuilt the population.

"This is arguably one of the greatest conservation success stories in American history," said Park Superintendent Cam Sholly. "The grizzly is a keystone predator, and its return to health indicates that the entire ecosystem is thriving."

However, the revival brings new challenges. As bears expand out of the park boundaries, encounters with cattle ranchers and rural homeowners have increased, prompting renewed debates over whether the species should be delisted from federal protections and subjected to managed hunting.`,
    readTime: '4 min read',
    section: 'U.S.',
    byline: 'By Jim Robbins',
    date: 'Monday, June 29, 2026'
  },

  // POLITICS SECTION ARTICLES
  {
    id: 'politics-1',
    title: 'Congress Launches Bipartisan Inquiry Into AI Lobbyist Infiltration',
    summary: 'Lawmakers want to know if synthetic lobbying campaigns generated by artificial intelligence have successfully targeted congressional staffers to influence technology bills.',
    content: `WASHINGTON — The House Oversight Committee has opened a sweeping inquiry into whether professional lobbying firms are using sophisticated artificial intelligence models to mass-produce highly convincing letters, emails, and policy papers designed to simulate organic citizen advocacy.

The probe follows a whistleblower report indicating that several technology companies hired agencies that deployed specialized LLMs to flood congressional offices with thousands of hyper-customized messages in support of a controversial semiconductor deregulation bill.

"If computer algorithms are pretending to be concerned constituents to hijack our democratic process, it poses an existential threat to the legislative system," Representative Ro Khanna of California said. "We must establish clear disclosure guidelines for automated communication."

The investigation is expected to summon prominent AI developers and lobbying heads to testify before Congress next month, setting up a landmark debate over the boundaries of automated speech and lobbying disclosures.`,
    readTime: '5 min read',
    section: 'Politics',
    byline: 'By Cecilia Kang',
    date: 'Monday, June 29, 2026'
  },

  // OPINION SECTION ARTICLES
  {
    id: 'opinion-1',
    title: 'The Real Danger of the Fed Ruling Isn’t Economic. It’s Political.',
    summary: 'By validating the president’s power to fire other regulators, the Supreme Court has set a dangerous precedent that could degrade democratic accountability.',
    content: `When the Supreme Court ruled on Monday that Federal Reserve officials cannot be fired without cause, a collective sigh of relief echoed across Wall Street. But a closer look at the twin rulings reveals a Trojan horse that could fundamentally destabilize independent oversight in the United States.

By giving the President the unbridled authority to terminate the heads of consumer protection, trade, and financial regulators at will, the court's conservative majority has accelerated a dangerous trend toward hyper-politicization of the civil service.

An independent FTC is supposed to police corporate monopolies without worrying about which party holds the White House. An independent CFPB is supposed to defend consumers from predatory lending, regardless of political donations. Stripping these bodies of their protections does not increase democratic accountability; it simply invites raw, transactional politics into spaces that require impartial, expert administration.

We are entering an era where regulatory oversight will fluctuate wildly with every single election cycle, creating business instability and eroding public trust in our institutions. This is a severe wound to the integrity of public administration, and we will feel its consequences for decades.`,
    readTime: '6 min read',
    section: 'Opinion',
    byline: 'By Ezra Klein',
    date: 'Monday, June 29, 2026'
  }
];

export const MOCK_COMMENTS: Comment[] = [
  {
    id: 'c1',
    author: 'Eleanor Vance',
    text: 'A critical decision for our financial system. Central bank independence is what keeps us from spiraling into hyperinflation. The Court drew the right line here.',
    date: 'June 29, 2026, 7:14 PM',
    likes: 42
  },
  {
    id: 'c2',
    author: 'Marcus Aurel',
    text: 'The companion ruling on other regulators is the real story. Firing regulatory heads at will turns vital watchdogs into political playthings. Extremely dangerous.',
    date: 'June 29, 2026, 7:22 PM',
    likes: 89
  },
  {
    id: 'c3',
    author: 'Sarah Jenkins',
    text: 'Proud of Gen Z for stepping up! We need representatives who actually have to live with the long-term consequences of the laws being passed today.',
    date: 'June 29, 2026, 7:45 PM',
    likes: 124
  },
  {
    id: 'c4',
    author: 'Dave_In_Sac',
    text: 'Regarding the $40M election speedup: it’s about time! It is crazy that California takes 3 weeks to count votes while other states manage it in hours.',
    date: 'June 29, 2026, 8:01 PM',
    likes: 15
  }
];
