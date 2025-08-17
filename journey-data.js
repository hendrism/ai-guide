/* exported journeyData */
// Data structure for all days
const journeyData = [
{
    day: 0,
    title: "Set Your Goal",
    duration: "2 minutes",
    description: "First, let's understand why you're here",
    content: `
        <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Why are you learning about AI?</h3>
            <div class="goal-selection">
                <label class="goal-option">
                    <input type="radio" name="goal" value="I want to use AI for daily tasks">
                    <span>I want to use AI for daily tasks</span>
                </label>
                <label class="goal-option">
                    <input type="radio" name="goal" value="I want to understand what AI can and can't do">
                    <span>I want to understand what AI can and can't do</span>
                </label>
                <label class="goal-option">
                    <input type="radio" name="goal" value="I want to stay informed about AI developments">
                    <span>I want to stay informed about AI developments</span>
                </label>
                <label class="goal-option">
                    <input type="radio" name="goal" value="All of the above">
                    <span>All of the above</span>
                </label>
            </div>
        </div>
        
        <div class="content-card blue">
            <p style="font-size: 0.875rem; color: #1e40af;">
                <strong>Remember your choice!</strong> It will guide which sections to focus on most.
                You can always come back and change this.
            </p>
        </div>
    `
},
{
    day: 1,
    title: "Your First AI Conversation",
    duration: "20 minutes",
    description: "Get hands-on experience with AI right away",
    tasks: [
        "Go to chat.openai.com and create a free account",
        "Ask the first conversation starter",
        "Try the follow-up prompt",
        "Read the 'What You Learned' section"
    ],
    content: `
        <div class="content-card green" style="margin-bottom: 1.5rem;">
            <h3 style="font-weight: 600; color: #166534; margin-bottom: 0.5rem;">Step 1: Pick Your AI</h3>
            <p style="color: #15803d; margin-bottom: 0.75rem;">We recommend starting with ChatGPT (most popular, good free version)</p>
            <a href="https://chat.openai.com" target="_blank" class="btn" style="background-color: #16a34a; color: white;">
                Go to ChatGPT →
            </a>
        </div>

        <div style="margin-bottom: 1.5rem;">
            <h3 style="font-weight: 600; margin-bottom: 0.75rem;">Step 2: Copy and paste this exact message:</h3>
            <div class="prompt-box">
                "I'm new to AI. Can you explain in simple terms what you are and what you can help me with? Please give me 3 specific examples of how someone like me could use you."
            </div>
        </div>

        <div style="margin-bottom: 1.5rem;">
            <h3 style="font-weight: 600; margin-bottom: 0.75rem;">Step 3: Then try this follow-up:</h3>
            <div class="prompt-box">
                "Now help me write a polite email declining a dinner invitation because I have other plans."
            </div>
        </div>

        <div class="content-card blue">
            <h3 style="font-weight: 600; color: #1e40af; margin-bottom: 0.5rem;">What You Just Learned:</h3>
            <ul style="color: #2563eb; font-size: 0.875rem; margin-left: 1rem;">
                <li>AI understands context and nuance</li>
                <li>It can help with practical daily tasks</li>
                <li>You can have a natural conversation with it</li>
            </ul>
        </div>
    `
},
{
    day: 2,
    title: "Understanding What AI Actually Is",
    duration: "15 minutes",
    description: "Learn what happened behind the scenes yesterday",
    tasks: [
        "Read the explanation of how AI works",
        "Test the weather question in ChatGPT",
        "Understand AI limitations"
    ],
    content: `
        <div style="margin-bottom: 1.5rem;">
            <h3 style="font-weight: 600; margin-bottom: 0.75rem;">What you used yesterday is called a "Large Language Model" (LLM)</h3>
            <div class="content-card yellow">
                <p style="color: #a16207; margin-bottom: 0.5rem;"><strong>Think of it like this:</strong></p>
                <p style="color: #ca8a04; font-size: 0.875rem;">AI = A really good pattern recognition system</p>
                <ul style="color: #ca8a04; font-size: 0.875rem; margin-top: 0.5rem; margin-left: 1rem;">
                    <li>It read millions of books, articles, and websites</li>
                    <li>It learned patterns about how humans write and think</li>
                    <li>When you ask something, it predicts the most helpful response</li>
                </ul>
            </div>
        </div>

        <div class="content-card red" style="margin-bottom: 1.5rem;">
            <h3 style="font-weight: 600; color: #991b1b; margin-bottom: 0.5rem;">Key Point:</h3>
            <p style="color: #dc2626; font-size: 0.875rem;">
                AI doesn't "know" things the way you do. It's very sophisticated pattern matching, 
                not human-like thinking.
            </p>
        </div>

        <div>
            <h3 style="font-weight: 600; margin-bottom: 0.75rem;">Test Your Understanding:</h3>
            <p style="margin-bottom: 0.5rem;">Go back to ChatGPT and ask:</p>
            <div class="prompt-box">
                "What's the weather like today?"
            </div>
            <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.5rem;">
                <strong>Notice:</strong> It can't tell you because it doesn't have real-time information. 
                This is normal and expected.
            </p>
        </div>
    `
},
{
    day: 3,
    title: "Discover What AI Excels At",
    duration: "25 minutes",
    description: "Try 4 different types of tasks to see AI's strengths",
    tasks: [
        "Research Assistant: Ask about solar panels",
        "Creative Brainstorming: Ask for hobby suggestions", 
        "Problem-Solving: Ask about computer troubleshooting",
        "Learning Tutor: Ask about compound interest"
    ],
    content: `
        <div class="content-grid" style="margin-bottom: 1.5rem;">
            <div class="content-card green">
                <h3 style="font-weight: 600; color: #166534; margin-bottom: 0.5rem;">Task 1: Research Assistant</h3>
                <div style="background: white; padding: 0.5rem; border-radius: 4px; font-size: 0.75rem; font-family: monospace;">
                    "I'm thinking about getting solar panels for my house. What are the main factors I should consider? Give me a simple pros and cons list."
                </div>
            </div>

            <div class="content-card purple">
                <h3 style="font-weight: 600; color: #7c2d12; margin-bottom: 0.5rem;">Task 2: Creative Brainstorming</h3>
                <div style="background: white; padding: 0.5rem; border-radius: 4px; font-size: 0.75rem; font-family: monospace;">
                    "I want to start a new hobby that's creative but doesn't require expensive equipment. Give me 5 specific suggestions with brief explanations."
                </div>
            </div>

            <div class="content-card orange">
                <h3 style="font-weight: 600; color: #9a3412; margin-bottom: 0.5rem;">Task 3: Problem-Solving</h3>
                <div style="background: white; padding: 0.5rem; border-radius: 4px; font-size: 0.75rem; font-family: monospace;">
                    "My computer is running slowly. Walk me through 5 simple troubleshooting steps I can try, in order of easiest to hardest."
                </div>
            </div>

            <div class="content-card blue">
                <h3 style="font-weight: 600; color: #1e40af; margin-bottom: 0.5rem;">Task 4: Learning Tutor</h3>
                <div style="background: white; padding: 0.5rem; border-radius: 4px; font-size: 0.75rem; font-family: monospace;">
                    "Explain how compound interest works. First explain it simply, then give me a concrete example with actual numbers."
                </div>
            </div>
        </div>

        <div class="content-card" style="background-color: #f3f4f6; border-color: #6b7280;">
            <h3 style="font-weight: 600; margin-bottom: 0.5rem;">What You're Discovering:</h3>
            <p style="font-size: 0.875rem; color: #374151;">
                AI excels at: explanation, analysis, brainstorming, step-by-step guidance, 
                and adapting explanations to your level.
            </p>
        </div>
    `
},
{
    day: 4,
    title: "Getting Better Results",
    duration: "20 minutes",
    description: "Learn the formula for better prompts",
    tasks: [
        "Learn the better prompting formula",
        "Try the cooking prompt",
        "Try the neighbor message prompt", 
        "Try the investment teaching prompt"
    ],
    content: `
        <div class="content-card yellow" style="margin-bottom: 1.5rem;">
            <h3 style="font-weight: 600; color: #a16207; margin-bottom: 0.5rem;">Formula for Better Prompts:</h3>
            <p style="color: #ca8a04; font-size: 0.875rem;">
                <strong>Context + Specific Request + Desired Format = Better Results</strong>
            </p>
        </div>

        <div style="margin-bottom: 1rem;">
            <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Practice Round 1: Cooking</h4>
            <div style="background-color: #fef2f2; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.5rem;">
                <p style="color: #991b1b; font-size: 0.875rem;"><strong>Instead of:</strong> "Help me cook dinner"</p>
            </div>
            <div style="background-color: #f0fdf4; padding: 0.75rem; border-radius: 6px;">
                <p style="color: #166534; font-size: 0.875rem; margin-bottom: 0.25rem;"><strong>Try this:</strong></p>
                <div class="prompt-box" style="margin: 0;">
                    "I'm a beginner cook with 30 minutes. I have chicken breast, rice, and mixed vegetables. Give me a simple step-by-step recipe with exact timing for each step."
                </div>
            </div>
        </div>

        <div style="margin-bottom: 1rem;">
            <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Practice Round 2: Communication</h4>
            <div style="background-color: #f0fdf4; padding: 0.75rem; border-radius: 6px;">
                <div class="prompt-box" style="margin: 0;">
                    "I need to explain to my neighbor why I can't help them move this weekend. Write this as: 1) A brief, polite text message, and 2) A more detailed email. I want to maintain a good relationship."
                </div>
            </div>
        </div>

        <div style="margin-bottom: 1rem;">
            <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Practice Round 3: Learning</h4>
            <div style="background-color: #f0fdf4; padding: 0.75rem; border-radius: 6px;">
                <div class="prompt-box" style="margin: 0;">
                    "Act as a patient teacher. I'm learning about investments but get confused by jargon. Explain the difference between stocks and bonds using simple analogies, then give me 3 follow-up questions I should ask myself."
                </div>
            </div>
        </div>
    `
},
{
    day: 5,
    title: "Understanding AI Concerns",
    duration: "Reading only",
    description: "Address the real concerns vs. overblown fears",
    tasks: [
        "Read about real concerns",
        "Read about overblown fears",
        "Understand the balanced perspective"
    ],
    content: `
        <div class="content-card red" style="margin-bottom: 1.5rem;">
            <h3 style="font-weight: 600; color: #991b1b; margin-bottom: 0.75rem;">Real Concerns (Worth Taking Seriously):</h3>
            <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.75rem;">
                    <h4 style="font-weight: 600; color: #dc2626;">1. AI Can Confidently State Wrong Information</h4>
                    <ul style="color: #dc2626; margin-left: 1rem; margin-top: 0.25rem;">
                        <li>Always double-check important facts</li>
                        <li>Use AI as a starting point, not the final answer</li>
                        <li>When in doubt, ask: "How confident are you in this?"</li>
                    </ul>
                </div>
                <div style="margin-bottom: 0.75rem;">
                    <h4 style="font-weight: 600; color: #dc2626;">2. Job Impact</h4>
                    <ul style="color: #dc2626; margin-left: 1rem; margin-top: 0.25rem;">
                        <li>Some jobs will change, new ones will emerge</li>
                        <li>Focus: Learn to work WITH AI rather than be replaced BY it</li>
                        <li>Most jobs will transform rather than disappear</li>
                    </ul>
                </div>
                <div>
                    <h4 style="font-weight: 600; color: #dc2626;">3. Privacy</h4>
                    <ul style="color: #dc2626; margin-left: 1rem; margin-top: 0.25rem;">
                        <li>Don't share passwords, SSNs, or confidential work info</li>
                        <li>Use AI for general help, not sensitive personal matters</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="content-card green" style="margin-bottom: 1.5rem;">
            <h3 style="font-weight: 600; color: #166534; margin-bottom: 0.75rem;">Overblown Fears:</h3>
            <div style="font-size: 0.875rem;">
                <div style="margin-bottom: 0.75rem;">
                    <h4 style="font-weight: 600; color: #15803d;">"AI Will Take Over"</h4>
                    <p style="color: #15803d;">Current AI is sophisticated pattern matching, not conscious intelligence</p>
                </div>
                <div>
                    <h4 style="font-weight: 600; color: #15803d;">"I Need to Learn Everything Right Now"</h4>
                    <p style="color: #15803d;">AI is still very new - most people are figuring it out. You're already ahead by being curious!</p>
                </div>
            </div>
        </div>

        <div class="content-card blue">
            <h3 style="font-weight: 600; color: #1e40af; margin-bottom: 0.5rem;">Your Takeaway:</h3>
            <p style="color: #2563eb; font-size: 0.875rem;">
                Use AI as a powerful tool while staying appropriately cautious. 
                You don't need to fear it, but you shouldn't blindly trust it either.
            </p>
        </div>
    `
},
{
    day: 6,
    title: "Exploring Different AI Tools",
    duration: "25 minutes",
    description: "Try 4 different AI tools to see their unique strengths",
    tasks: [
        "Try Claude (different perspective)",
        "Try Perplexity (with web search)",
        "Try image AI with DALL-E",
        "Compare the results"
    ],
    content: `
        <div class="content-grid" style="margin-bottom: 1.5rem;">
            <div class="content-card purple">
                <h3 style="font-weight: 600; color: #7c2d12; margin-bottom: 0.5rem;">Tool #2: Claude</h3>
                <a href="https://claude.ai" target="_blank" class="btn" style="background-color: #a855f7; color: white; margin-bottom: 0.5rem; display: inline-block;">
                    Try Claude →
                </a>
                <p style="color: #a855f7; font-size: 0.75rem;">Ask the same solar panel question from Day 3</p>
            </div>

            <div class="content-card blue">
                <h3 style="font-weight: 600; color: #1e40af; margin-bottom: 0.5rem;">Tool #3: Perplexity</h3>
                <a href="https://perplexity.ai" target="_blank" class="btn" style="background-color: #3b82f6; color: white; margin-bottom: 0.5rem; display: inline-block;">
                    Try Perplexity →
                </a>
                <p style="color: #2563eb; font-size: 0.75rem;">Ask: "Latest solar panel developments 2024" - notice the sources!</p>
            </div>

            <div class="content-card green">
                <h3 style="font-weight: 600; color: #166534; margin-bottom: 0.5rem;">Tool #4: Image AI</h3>
                <a href="https://bing.com/create" target="_blank" class="btn" style="background-color: #16a34a; color: white; margin-bottom: 0.5rem; display: inline-block;">
                    Try DALL-E →
                </a>
                <p style="color: #15803d; font-size: 0.75rem;">Try: "Simple diagram showing how solar panels work on a house"</p>
            </div>

            <div class="content-card orange">
                <h3 style="font-weight: 600; color: #9a3412; margin-bottom: 0.5rem;">What You'll Notice:</h3>
                <ul style="color: #ea580c; font-size: 0.75rem; margin-left: 1rem;">
                    <li>Different AIs have different strengths</li>
                    <li>Some have internet access, others don't</li>
                    <li>AI isn't just text - it's images too!</li>
                    <li>Multiple perspectives on same question</li>
                </ul>
            </div>
        </div>
    `
},
{
    day: 7,
    title: "Creating Your Personal AI Strategy",
    duration: "15 minutes",
    description: "Plan your ongoing AI journey based on your goals",
    tasks: [
        "Choose your primary AI tool",
        "Pick your focus area",
        "Set your 30-day challenge",
        "Save your emergency reset plan"
    ],
    content: `
        <div class="content-card blue" style="margin-bottom: 1.5rem;">
            <h3 style="font-weight: 600; color: #1e40af; margin-bottom: 0.75rem;">Choose Your Primary Tool:</h3>
            <div class="goal-selection">
                <label class="goal-option">
                    <input type="radio" name="primaryTool" value="ChatGPT (most popular, good all-around)">
                    <span>ChatGPT (most popular, good all-around)</span>
                </label>
                <label class="goal-option">
                    <input type="radio" name="primaryTool" value="Claude (often more nuanced, good for complex tasks)">
                    <span>Claude (often more nuanced, good for complex tasks)</span>
                </label>
                <label class="goal-option">
                    <input type="radio" name="primaryTool" value="Perplexity (great for research with sources)">
                    <span>Perplexity (great for research with sources)</span>
                </label>
                <label class="goal-option">
                    <input type="radio" name="primaryTool" value="I want to use different ones for different tasks">
                    <span>I want to use different ones for different tasks</span>
                </label>
            </div>
        </div>

        <div class="content-card green" style="margin-bottom: 1.5rem;">
            <h3 style="font-weight: 600; color: #166534; margin-bottom: 0.75rem;">Your 30-Day Challenge:</h3>
            <p style="color: #15803d; font-size: 0.875rem; margin-bottom: 0.75rem;">Pick ONE specific way you'll use AI weekly for the next month:</p>
            <div class="goal-selection">
                <label class="goal-option">
                    <input type="radio" name="challenge" value="Plan weekend projects with AI every Friday">
                    <span>Plan weekend projects with AI every Friday</span>
                </label>
                <label class="goal-option">
                    <input type="radio" name="challenge" value="Use AI to help with emails twice a week">
                    <span>Use AI to help with emails twice a week</span>
                </label>
                <label class="goal-option">
                    <input type="radio" name="challenge" value="Research major purchases with AI assistance">
                    <span>Research major purchases with AI assistance</span>
                </label>
                <label class="goal-option">
                    <input type="radio" name="challenge" value="Learn something new with AI as your tutor">
                    <span>Learn something new with AI as your tutor</span>
                </label>
            </div>
        </div>

        <div class="content-card yellow" style="margin-bottom: 1.5rem;">
            <h3 style="font-weight: 600; color: #a16207; margin-bottom: 0.75rem;">Emergency Reset Plan:</h3>
            <p style="color: #ca8a04; font-size: 0.875rem; margin-bottom: 0.5rem;">If you get overwhelmed or frustrated:</p>
            <ul style="color: #d97706; font-size: 0.75rem; margin-left: 1rem;">
                <li>Go back to Day 3's simple tasks</li>
                <li>Remember: You don't need to use every AI tool</li>
                <li>Focus on one specific use case that helps you</li>
                <li>Ask friends/family what they use AI for</li>
            </ul>
        </div>

        <div style="background-color: #f3e8ff; padding: 1rem; border-radius: 8px; text-align: center;">
            <h3 style="font-weight: bold; color: #7c2d12; font-size: 1.125rem; margin-bottom: 0.5rem;">🎉 Congratulations!</h3>
            <p style="color: #a855f7; font-size: 0.875rem;">
                You've completed your 7-day AI journey. You're no longer "behind" - 
                you're actively exploring one of the most important technological developments of our time!
            </p>
        </div>
    `
}
];
