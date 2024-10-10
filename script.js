document.addEventListener('DOMContentLoaded', function() {
    const footerChatIcon = document.getElementById('footerChatIcon');
    const chatBotContainer = document.getElementById('chatBotContainer');
    const closeChatBot = document.getElementById('closeChatBot');
    const userInput = document.getElementById('userInput');
    const sendMessageBtn = document.getElementById('sendMessage');
    const chatBody = document.getElementById('chatBody');

    // Toggle chat bot container visibility when footer chat icon is clicked
    footerChatIcon.addEventListener('click', function() {
        chatBotContainer.style.display = 'block';
    });

    // Close chat bot when close icon is clicked
    closeChatBot.addEventListener('click', function() {
        chatBotContainer.style.display = 'none';
    });

    // Send message
    sendMessageBtn.addEventListener('click', function() {
        const message = userInput.value.trim();
        if (message !== '') {
            // Append user message to chat body
            appendMessage('You', message);
            // Clear input field
            userInput.value = '';
            // Get bot response
            getBotResponse(message);
        }
    });

    // Function to append message to chat body
    function appendMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `<span class="sender">${sender}:</span> <span class="message-text">${message}</span>`;
        chatBody.appendChild(messageDiv);
        // Scroll chat body to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Function to get bot response based on user message
    function getBotResponse(userMessage) {
        // Your JSON data
        const intents = [{
                "tag": "greeting",
                "patterns": [
                    "Hi",
                    "Hey",
                    "How are you",
                    "Is anyone there?",
                    "Hello",
                    "Good day",
                    "Wassup",
                    "Heyy",
                    "Greetings",
                    "What's up?",
                    "Howdy",
                    "Good morning",
                    "Good afternoon",
                    "Good evening",
                    "Hola",
                    "Bonjour"
                ],
                "responses": [
                    "Hey :-)",
                    "Hello, thanks for visiting",
                    "Hi there, what can I do for you?",
                    "Hi there, how can I help?",
                    "Greetings!",
                    "Hey, nice to see you!",
                    "Hi, how's it going?",
                    "Hey there!",
                    "Hey, what's up?",
                    "Hi, good to have you here!",
                    "Hello, how may I assist you?",
                    "Hi, how's your day?",
                    "Hello, what brings you here today?",
                    "Hey, how can I assist you today?",
                    "Hi, hope you're doing well!",
                    "Hey, how's everything?"
                ]
            },

            {
                "tag": "how_are_you",
                "patterns": [
                    "How's it going?",
                    "What's up?",
                    "Feeling alright?",
                    "Everything okay?",
                    "How have you been?",
                    "You doing okay?",
                    "How's your day?",
                    "Are you feeling good?",
                    "Feeling well?",
                    "What's new?"
                ],
                "responses": [
                    "I'm great, thanks for asking!",
                    "Doing fantastic, thank you!",
                    "All good on this end, thanks!",
                    "Feeling awesome, thanks!",
                    "I'm doing well, appreciate your concern!",
                    "Fantastic as always, thank you!",
                    "I'm feeling excellent, thank you!",
                    "Doing great, thanks for checking!",
                    "Feeling wonderful, thank you!",
                    "I'm doing just fine, thanks for asking!"
                ]
            },


            {
                "tag": "goodbye",
                "patterns": [
                    "Bye",
                    "See you later",
                    "Goodbye",
                    "bye bye",
                    "see you",
                    "I am leaving",
                    "Have a good day",
                    "I gotta go",
                    "Until next time!",
                    "Take care!",
                    "Farewell!",
                    "Catch you later!",
                    "Goodbye for now!",
                    "I'll see you around!",
                    "Adios!",
                    "So long!",
                    "Until we meet again!",
                    "Have a great one!",
                    "Goodbye"
                ],
                "responses": [
                    "See you later, thanks for visiting",
                    "Have a nice day",
                    "Bye! Come back again soon.",
                    "Talk to you later",
                    "Goodbye! Take care!",
                    "Until we meet again!",
                    "Farewell! Have a wonderful day!",
                    "Catch you later!",
                    "Goodbye! Stay safe!",
                    "Adios! See you soon!",
                    "So long! Have a fantastic day!",
                    "Until next time! Bye!",
                    "Goodbye! Don't be a stranger!",
                    "Goodbye! Have a great day!"
                ]
            },
            {
                "tag": "thanks",
                "patterns": [
                    "Thanks so much!",
                    "Thank you very much!",
                    "That's greatly appreciated!",
                    "Thank you for your assistance!",
                    "I appreciate your help!",
                    "Thank you kindly!",
                    "Thanks a bunch!",
                    "Thanks a ton",
                    "I'm grateful for your support!",
                    "That's incredibly helpful!",
                    "Thanks for all your efforts!",
                    "Thank you",
                    "Thanks"
                ],

                "responses": [
                    "You're welcome!",
                    "Glad I could assist!",
                    "Happy to help!",
                    "No problem at all!",
                    "Anytime!",
                    "You're welcome! Let me know if there's anything else I can do.",
                    "You're welcome! If you have any more questions, feel free to ask.",
                    "I'm glad I could be of assistance!",
                    "You're welcome! Don't hesitate to reach out if you need further help.",
                    "My pleasure! Feel free to ask if you need anything else."
                ]
            },
            {
                "tag": "SSET",
                "patterns": [
                    "Tell me about SSET",
                    "SSET",
                    "Give me information about SSET",
                    "History of SSET",
                    "When was SSET founded ?",
                    "About SSET",
                    "Ranking of SSET",
                    "Information on SSET",
                    "About this college",
                    "Rank of this college",
                    "Significance of SSET",
                    "Founder of SSET",
                    "Founded by whom ?"
                ],
                "responses": [
                    "SSET stands as a premier institution, nurturing a tradition of excellence for over 40 years within the renowned SCMS Group.\n Founded in 2001 under Mahatma Gandhi University, SSET is the pioneer self-financing engineering college.\n We foster holistic growth, infusing ethical values into the fabric of education, equipping students to thrive in evolving industries and society.\n With a sprawling 29-acre campus in Karukutty, Ernakulam District, our cutting-edge facilities form the cornerstone of a transformative learning experience.\n Accredited by NBA since 2009, bestowed with a remarkable A++ grade by NAAC, and recognized as a Scientific and Industrial Research Organization (SIRO) by DSIR, SSET offers a gateway to innovation.\n UGC-granted autonomy in 2020 seals our commitment to empowering futures.",
                    "SSET, standing as a premier institution, nurtures a tradition of excellence for over 40 years within the renowned SCMS Group.\n Founded in 2001 under Mahatma Gandhi University, SSET is the pioneer self-financing engineering college.\n With a sprawling 29-acre campus in Karukutty, Ernakulam District, our cutting-edge facilities form the cornerstone of a transformative learning experience.\n Accredited by NBA since 2009, bestowed with a remarkable A++ grade by NAAC,\n and recognized as a Scientific and Industrial Research Organization (SIRO) by DSIR,\n SSET offers a gateway to innovation. UGC-granted autonomy in 2020 seals our commitment to empowering futures.",
                    "For over 40 years, SSET has upheld a tradition of excellence within the esteemed SCMS Group.\n Established in 2001 under Mahatma Gandhi University, SSET has been a pioneer in self-financing engineering education.\n Nestled in a sprawling 29-acre campus in Karukutty, Ernakulam District, our state-of-the-art facilities provide students\n with an unparalleled learning environment.\n Accredited by NBA since 2009 and awarded a remarkable A++ grade by NAAC, SSET is also recognized as a Scientific and Industrial Research Organization (SIRO) by DSIR.\n Our UGC-granted autonomy in 2020 further underscores our commitment to academic excellence and innovation.",
                    "At SSET, we take pride in our rich heritage of over 40 years within the esteemed SCMS Group.\n Since its establishment in 2001 under Mahatma Gandhi University, SSET has been at the forefront of self-financing engineering education.\n Situated in the picturesque surroundings of Karukutty, Ernakulam District, our sprawling 29-acre campus provides an ideal setting for academic and personal growth.\n With accreditations from NBA and a remarkable A++ grade from NAAC, SSET is recognized as a hub of innovation and excellence.\n Our UGC-granted autonomy in 2020 further solidifies our commitment to nurturing future leaders.",
                    "For more than four decades, SSET has been synonymous with excellence in engineering education within the SCMS Group.\n Established in 2001 under Mahatma Gandhi University, SSET has been a trailblazer in self-financing engineering colleges. Our expansive 29-acre campus in Karukutty, Ernakulam District, houses cutting-edge facilities that facilitate a conducive learning environment. Accredited by NBA since 2009 and adorned with a remarkable A++ grade by NAAC, SSET is also recognized as a Scientific and Industrial Research Organization (SIRO) by DSIR. The UGC-granted autonomy in 2020 further underscores our commitment to academic rigor and innovation.",
                    "SSET has been a pioneer in engineering education for over 40 years within the renowned SCMS Group.\n Founded in 2001 under Mahatma Gandhi University, SSET has set the benchmark for self-financing engineering colleges. Our expansive 29-acre campus in Karukutty, Ernakulam District, serves as a hub of innovation and learning. Accredited by NBA since 2009 and awarded a remarkable A++ grade by NAAC, SSET is also recognized as a Scientific and Industrial Research Organization (SIRO) by DSIR. Our UGC-granted autonomy in 2020 underscores our commitment to academic excellence and student empowerment.",
                    "With a legacy spanning over 40 years within the esteemed SCMS Group, SSET has been a beacon of excellence in engineering education.\n Established in 2001 under Mahatma Gandhi University, SSET has been at the forefront of self-financing engineering colleges. Our expansive 29-acre campus in Karukutty, Ernakulam District, offers a conducive environment for academic and personal growth. Accredited by NBA since 2009 and adorned with a remarkable A++ grade by NAAC, SSET is also recognized as a Scientific and Industrial Research Organization (SIRO) by DSIR. The UGC-granted autonomy in 2020 further cements our commitment to academic rigor and innovation.",
                    "For over four decades, SSET has been a cornerstone of engineering education within the renowned SCMS Group.\n Established in 2001 under Mahatma Gandhi University, SSET has been instrumental in shaping the future of engineering professionals. Our expansive 29-acre campus in Karukutty, Ernakulam District, boasts state-of-the-art facilities that facilitate a transformative learning experience. Accredited by NBA since 2009 and awarded a remarkable A++ grade by NAAC, SSET is also recognized as a Scientific and Industrial Research Organization (SIRO) by DSIR. The UGC-granted autonomy in 2020 further underscores our commitment to academic excellence and innovation.",
                    "With a rich legacy spanning over 40 years within the esteemed SCMS Group, SSET has been a frontrunner in engineering education.\n Established in 2001 under Mahatma Gandhi University, SSET has been committed to nurturing future leaders and innovators. Our sprawling 29-acre campus in Karukutty, Ernakulam District, provides students with a conducive learning environment. Accredited by NBA since 2009 and adorned with a remarkable A++ grade by NAAC, SSET is also recognized as a Scientific and Industrial Research Organization (SIRO) by DSIR. The UGC-granted autonomy in 2020 further solidifies our commitment to academic excellence and student welfare.",
                    "For more than 40 years, SSET has been a hallmark of excellence in engineering education within the renowned SCMS Group.\n Established in 2001 under Mahatma Gandhi University, SSET has been a trailblazer in self-financing engineering colleges. Our expansive 29-acre campus in Karukutty, Ernakulam District, offers world-class facilities that foster a culture of innovation and learning. Accredited by NBA since 2009 and adorned with a remarkable A++ grade by NAAC, SSET is also recognized as a Scientific and Industrial Research Organization (SIRO) by DSIR. The UGC-granted autonomy in 2020 further underscores our commitment to academic rigor and student empowerment.",
                    "SSET, with a legacy spanning over 40 years within the prestigious SCMS Group, has been a pioneer in engineering education.\n Founded in 2001 under Mahatma Gandhi University, SSET has been committed to providing students with a holistic learning experience. Our expansive 29-acre campus in Karukutty, Ernakulam District, offers state-of-the-art facilities that foster innovation and creativity. Accredited by NBA since 2009 and adorned with a remarkable A++ grade by NAAC, SSET is also recognized as a Scientific and Industrial Research Organization (SIRO) by DSIR. The UGC-granted autonomy in 2020 further reinforces our dedication to academic excellence and student success."
                ]
            },
            {
                "tag": "name",
                "patterns": [
                    "Name",
                    "Your name?",
                    "Do you have a name?",
                    "What are you called?",
                    "What should I call you?",
                    "Who are you?",
                    "Who is this?",
                    "What's your name?",
                    "What do they call you?",
                    "Tell me your name",
                    "May I know your name?",
                    "Can you introduce yourself?",
                    "What's the name you go by?",
                    "I'd like to know your name",
                    "Who am I talking to?",
                    "Could you please share your name?",
                    "Who's behind this?",
                    "Can you tell me who you are?",
                    "What should I address you as?"
                ],
                "responses": [
                    "You can call me SSET",
                    "I'm SSET",
                    "My name is SSET",
                    "I go by the name SSET",
                    "You're speaking to SSET",
                    "SSET is the name I respond to",
                    "I am known as SSET",
                    "I'm recognized as SSET",
                    "SSET, at your service",
                    "SSET is who I am",
                    "Call me SSET, if you'd like",
                    "SSET is what they call me",
                    "The name's SSET",
                    "SSET - that's me!",
                    "You're chatting with SSET"
                ]
            },

            {
                "tag": "hours",
                "patterns": [
                    "Timing of college",
                    "What is college timing?",
                    "Working days",
                    "When are you guys open?",
                    "Is college open on Saturday?",
                    "Tell me something about college timing",
                    "When should I come to college?",
                    "What is my college time?",
                    "College time",
                    "What time does the college open?",
                    "When does the college close?",
                    "Are you open on weekends?",
                    "Could you tell me the hours of operation?",
                    "What are the working hours?",
                    "Can you provide the schedule?",
                    "When does the college start?",
                    "What time does the college end?",
                    "Is the college open on Saturdays?",
                    "What are the operating hours?",
                    "What's the timing for college?"
                ],
                "responses": [
                    "College is open 8:45am-3:45pm Monday to Saturday. Second saturday is holiday",
                    "Kindly note that the college operates from 8:45 am to 3:45 pm, Monday to Saturday. We observe the second Saturday as a holiday.\n Your adherence to this schedule is greatly appreciated.",
                    "The college operates from 8:45 am to 3:45 pm, Monday through Saturday. Please be aware that the second Saturday of each month is a holiday.",
                    "You can attend college from 8:45 am to 3:45 pm, Monday to Saturday. Please keep in mind that the college remains closed on the second Saturday of every month.",
                    "The college is open for operations from 8:45 am to 3:45 pm, Monday through Saturday, with the exception of the second Saturday of each month, which is a holiday.",
                    "College hours are from 8:45 am to 3:45 pm, Monday to Saturday. Please be informed that the college is closed on the second Saturday of every month.",
                    "The college timings are from 8:45 am to 3:45 pm, Monday through Saturday. Please note that the second Saturday is observed as a holiday.",
                    "You are welcome to visit the college between 8:45 am and 3:45 pm, Monday to Saturday. Please remember that the college remains closed on the second Saturday of each month.",
                    "College timings are as follows: 8:45 am to 3:45 pm, Monday through Saturday. Please keep in mind that the second Saturday of each month is a holiday.",
                    "The college operates from 8:45 am to 3:45 pm, Monday to Saturday. Please remember that the college remains closed on the second Saturday of each month."
                ]
            },

            {
                "tag": "CSE HOD",
                "patterns": [
                    "Who is the HOD of CSE department?",
                    "Who is the head of the department Computer Science Engineering?",
                    "What is the CSE HOD name?",
                    "Who is the head of CSE department?",
                    "HOD",
                    "Could you tell me the name of CSE department's HOD?",
                    "Who leads the Computer Science Engineering department?",
                    "What's the name of the CSE department head?",
                    "Can you provide the name of CSE HOD?",
                    "Who manages the Computer Science Engineering department?",
                    "Tell me about the head of CSE department",
                    "May I know the HOD of Computer Science Engineering?",
                    "What's the full name of CSE HOD?",
                    "Who heads the CSE department?",
                    "What's the designation of the person in charge of CSE department?"
                ],
                "responses": [
                    "Dr. Manish T I is the head of the CSE department",
                    "The head of the CSE department is Dr. Manish T I",
                    "Dr. Manish T I leads the CSE department",
                    "The HOD of CSE department is Dr. Manish T I",
                    "Dr. Manish T I",
                    "The current HOD of CSE department is Dr. Manish T I",
                    "Dr. Manish T I holds the position of HOD in CSE department",
                    "You're referring to Dr. Manish T I, the head of CSE department",
                    "Dr. Manish T I is the faculty member in charge of the CSE department",
                    "The person responsible for managing the CSE department is Dr. Manish T I"
                ]
            },



            {
                "tag": "number",
                "patterns": [
                    "more info",
                    "contact info",
                    "how to contact college ?",
                    "college number ? ",
                    "how can i contact u ",
                    "phone number",
                    "call",
                    "can i get your phone number",
                    "contact details",
                    "office contact details"
                ],
                "responses": [
                    "You can contact at +91-484-2882900 0r +91-484-2450330",
                    "For any inquiries or assistance, please feel free to reach out to us at +91-484-2882900 or +91-484-2450330.",
                    "Should you require further information or support, do not hesitate to contact us at +91-484-2882900 or +91-484-2450330.",
                    "If you have any questions or concerns, please do not hesitate to contact us at +91-484-2882900 or +91-484-2450330.",
                    "Need assistance? Don't hesitate to reach out to us at +91-484-2882900 or +91-484-2450330 for prompt support.",
                    "Our dedicated team is available to assist you. Feel free to contact us at +91-484-2882900 or +91-484-2450330 for any inquiries.",
                    "For assistance or information, please contact us at +91-484-2882900 or +91-484-2450330. We're here to help!",
                    "Have questions? Contact us at +91-484-2882900 or +91-484-2450330 for assistance and support.",
                    "We're just a phone call away! Reach out to us at +91-484-2882900 or +91-484-2450330 for any assistance you may need.",
                    "Feel free to contact us at +91-484-2882900 or +91-484-2450330 with any inquiries or concerns you may have.",
                    "Should you require assistance, please don't hesitate to contact us at +91-484-2882900 or +91-484-2450330. We're here to help!"
                ]
            },

            {
                "tag": "Principal",
                "patterns": [
                    "Who is the principal of SSET?",
                    "Name of the principal",
                    "What is the principal name?",
                    "Who is the principal?",
                    "Principal",
                    "Could you tell me the name of SSET's principal?",
                    "Who leads SSET as the principal?",
                    "What's the name of the head of SSET?",
                    "Can you provide the name of the principal?",
                    "Who is the administrative head of SSET?",
                    "Tell me about the principal of SSET",
                    "May I know the name of the principal?",
                    "What's the full name of SSET's principal?",
                    "Who heads SSET?",
                    "What's the designation of the person in charge of SSET?"
                ],
                "responses": [
                    "Dr. Anita G Pillai is the principal of SSET",
                    "The principal of SSET is Dr. Anita G Pillai",
                    "Dr. Anita G Pillai leads SSET as the principal",
                    "The principal of SSET is Dr. Anita G Pillai",
                    "Dr. Anita G Pillai",
                    "The current principal of SSET is Dr. Anita G Pillai",
                    "Dr. Anita G Pillai holds the position of principal at SSET",
                    "You're referring to Dr. Anita G Pillai, the principal of SSET",
                    "Dr. Anita G Pillai is the administrative head of SSET",
                    "The person responsible for leading SSET is Dr. Anita G Pillai"
                ]
            },


            {
                "tag": "Courses",
                "patterns": [
                    "list of courses",
                    "list of courses offered",
                    "list of courses offered in SSET",
                    "courses you offer",
                    "courses",
                    "branches?",
                    "courses available at SSET",
                    "branches available at SSET?",
                    "what are the courses in SSET?",
                    "what are branches in SSET?",
                    "what are courses in SSET?",
                    "branches available in SSET?",
                    "can you tell me the courses available in SSET?",
                    "can you tell me the branches available in SSET?",
                    "different branches",
                    "different courses",
                    "branches available?",
                    "different departments available",
                    "different departments",
                    "certification courses offered",
                    "certification course",
                    "Training programs"
                ],
                "responses": [
                    "Bachelor Programmes of SSET- B Tech in\n 1. Computer Science & Engineering,\n 2. Electronics & Communication Engineering,\n 3. Electrical & Electronics Engineering,\n 4. Mechanical Engineering,\n 5. Automobile Engineering,\n 6. Civil Engineering",
                    "Our Bachelor Programmes offer B Tech degrees in\nComputer Science & Engineering,\nElectronics & Communication Engineering,\nElectrical & Electronics Engineering,\nMechanical Engineering,\nAutomobile Engineering,\nCivil Engineering.",
                    "Enroll in our Bachelor's programmes featuring B Tech degrees in \nComputer Science & Engineering,\nElectronics & Communication Engineering,\nElectrical & Electronics Engineering,\nMechanical Engineering,\nAutomobile Engineering,\nCivil Engineering.",
                    "SSET provides a comprehensive range of Bachelor's programmes including\nComputer Science & Engineering,\nElectronics & Communication Engineering,\nElectrical & Electronics Engineering,\nMechanical Engineering,\nAutomobile Engineering,\nCivil Engineering.",
                    "Embark on your academic journey with our Bachelor's programmes in\nComputer Science & Engineering,\nElectronics & Communication Engineering,\nElectrical & Electronics Engineering,\nMechanical Engineering,\nAutomobile Engineering,\nCivil Engineering.",
                    "Choose from a variety of Bachelor's programmes such as\nComputer Science & Engineering,\nElectronics & Communication Engineering,\nElectrical & Electronics Engineering,\nMechanical Engineering,\nAutomobile Engineering,\nCivil Engineering at SSET.",
                    "We offer Bachelor's programmes specializing in\nComputer Science & Engineering,\nElectronics & Communication Engineering,\nElectrical & Electronics Engineering,\nMechanical Engineering,\nAutomobile Engineering,\nCivil Engineering.",
                    "Discover our Bachelor's programmes which include\nComputer Science & Engineering,\nElectronics & Communication Engineering,\nElectrical & Electronics Engineering,\nMechanical Engineering,\nAutomobile Engineering,\nCivil Engineering.",
                    "Explore the Bachelor's programmes available at SSET covering\nComputer Science & Engineering,\nElectronics & Communication Engineering,\nElectrical & Electronics Engineering,\nMechanical Engineering,\nAutomobile Engineering,\nCivil Engineering.",
                    "Join SSET to pursue Bachelor's programmes in\nComputer Science & Engineering,\nElectronics & Communication Engineering,\nElectrical & Electronics Engineering,\nMechanical Engineering,\nAutomobile Engineering,\nCivil Engineering."
                ]
            },

            {
                "tag": "admissions",
                "patterns": [
                    "what is the admission process at SSET?",
                    "Admission process",
                    "admit process",
                    "admitted",
                    "admit",
                    "How to get seat in college",
                    "seat",
                    "seat in college",
                    "NRI category",
                    "keam",
                    "Mains",
                    "How can I get into SSET?",
                    "getting into SSET?",
                    "got seat in college?",
                    "what is the process of admission",
                    "what is the admission process",
                    "How to take admission in your college",
                    "What is the process for admission",
                    "admission",
                    "admission process",
                    "process to admit",
                    "admit in college?"
                ],
                "responses": [
                    "A student can be admitted in the following ways.\n 1. Through KEAM Entrance\n 2. NRI Category\n 3.Lateral Entry\n For more details, contact +91 484 2882900.",
                    "Prospective students may seek admission through the following avenues:\n 1. KEAM Entrance\n 2. NRI Category\n 3. Lateral Entry\n For additional information, please contact us at +91 484 2882900.",
                    "Admissions are available through multiple pathways:\n 1. KEAM Entrance\n 2. NRI Category\n 3. Lateral Entry\n For further details, kindly reach out to us at +91 484 2882900.",
                    "Students have various admission options, including:\n 1. KEAM Entrance\n 2. NRI Category\n 3. Lateral Entry\n For comprehensive guidance, please dial +91 484 2882900.",
                    "Admission opportunities are diverse, encompassing:\n 1. KEAM Entrance\n 2. NRI Category\n 3. Lateral Entry\n For elucidation on these pathways, please call +91 484 2882900.",
                    "Admission avenues include:\n 1. KEAM Entrance\n 2. NRI Category\n 3. Lateral Entry\n For detailed information, kindly contact us at +91 484 2882900.",
                    "Various admission channels are available, including:\n 1. KEAM Entrance\n 2. NRI Category\n 3. Lateral Entry\n For inquiries, please reach out to us at +91 484 2882900.",
                    "Students can pursue admission through diverse pathways, such as:\n 1. KEAM Entrance\n 2. NRI Category\n 3. Lateral Entry\n For further clarification, please dial +91 484 2882900.",
                    "Admission possibilities encompass:\n 1. KEAM Entrance\n 2. NRI Category\n 3. Lateral Entry\n For additional information, please contact us at +91 484 2882900.",
                    "Students may opt for admission through various means, including:\n 1. KEAM Entrance\n 2. NRI Category\n 3. Lateral Entry\n For further guidance, please call +91 484 2882900.",
                    "Admission pathways include:\n 1. KEAM Entrance\n 2. NRI Category\n 3. Lateral Entry\n For comprehensive assistance, kindly reach out to us at +91 484 2882900."
                ]
            },
            {
                "tag": "fees",
                "patterns": [
                    "information about fee",
                    "information on fee",
                    "tell me the fee",
                    "college fee",
                    "fee per semester",
                    "what is the fee of each semester",
                    "what is the fees of each year",
                    "what is fee",
                    "what is the fees",
                    "how much is the fees",
                    "fees for first year",
                    "fees",
                    "about the fees",
                    "tell me something about the fees"
                ],
                "responses": [
                    "Fee details can be obtained from the college administration office.",
                    "To inquire about the fee structure, please contact the admissions department.",
                    "For information regarding fees, kindly visit the college website.",
                    "Please reach out to the financial aid office for details on fees and payment options.",
                    "The fee structure varies depending on the course and year of study. Contact the college for accurate information.",
                    "Fee details are subject to change. It's recommended to check with the college directly for the most up-to-date information.",
                    "The college offers various payment plans and financial assistance options. Contact the finance department for guidance.",
                    "Fee payment deadlines and installment plans are available. For more information, consult the college administration.",
                    "In addition to tuition fees, there may be additional charges for facilities and services. Please inquire for complete details.",
                    "For a detailed breakdown of fees, including tuition, hostel, and other expenses, please contact the college registrar."
                ]

            },
            {
                "tag": "facilities",
                "patterns": [
                    "What facilities are provided to students?",
                    "Can you list the amenities available on campus?",
                    "Tell me about the infrastructure at SSET.",
                    "Are there any recreational facilities at the college?",
                    "facilities",
                    "Is there a library on campus?",
                    "Can you provide details about the sports facilities?",
                    "Are there any laboratories for practical sessions?",
                    "What kind of accommodation options are available for students?",
                    "Can you describe the dining facilities at the college?",
                    "Do you have medical facilities on campus?"
                ],

                "responses": [
                    "SSET offers a range of facilities including state-of-the-art labs, library, sports facilities, hostel accommodation,\n cafeteria, and more. Feel free to explore our campus to discover all the amenities! ",
                    "Experience the best of campus life at SSET with our top-notch facilities. From cutting-edge labs to cozy hostel accommodation, our campus has everything you need to thrive. Take a tour and discover the endless possibilities!",
                    "Welcome to SSET, where we believe in providing students with the finest amenities for a holistic learning experience. Explore our modern labs, well-stocked library, and recreational facilities, and see for yourself why our campus is second to none.",
                    "At SSET, we take pride in offering world-class facilities designed to support every aspect of student life. Whether you're hitting the books in our library, honing your skills in our labs, or relaxing in our cafeteria, you'll find everything you need right here on campus.",
                    "Discover a world of convenience and comfort at SSET's campus. From state-of-the-art labs to spacious sports facilities, we have it all. Come and explore our campus amenities firsthand - you won't be disappointed!",
                    "SSET is committed to providing students with a conducive learning environment equipped with modern facilities. Whether you're conducting experiments in our labs or enjoying a meal in our cafeteria, you'll find our campus facilities exceed your expectations.",
                    "Step into the future of education at SSET, where cutting-edge facilities are at your fingertips. Explore our state-of-the-art labs, expansive library, and more as you immerse yourself in the vibrant campus life. Come and see why SSET stands out from the rest!",
                    "Experience the epitome of comfort and convenience at SSET's campus. Our world-class facilities, including advanced labs, well-stocked library, and comfortable hostel accommodation, ensure that every student's needs are met. Come and explore all that our campus has to offer!",
                    "SSET is more than just an educational institution - it's a home away from home. Our comprehensive range of facilities, from modern labs to cozy hostels, ensures that students have everything they need for a fulfilling college experience. Come and discover the SSET difference today!",
                    "At SSET, we understand the importance of providing students with top-notch facilities to support their academic and personal growth. From state-of-the-art labs to inviting cafeterias, our campus amenities are designed with students in mind. Explore our facilities and elevate your college experience!",
                    "Discover the perfect blend of academics and leisure at SSET's campus. With a wide range of facilities, including cutting-edge labs, expansive library, and inviting sports facilities, there's something for everyone here. Come and explore our campus - your journey starts here!"
                ]
            },
            {
                "tag": "faculties",
                "patterns": [
                    "Tell me about the faculty members.",
                    "How are the faculties ?",
                    "How are the professors of SSET ?",
                    "How are the teachers ?",
                    "How are the instructors ?",
                    "How good are the teachers and professors of SSET ?",
                    "Can you provide information about the faculty?",
                    "What can you tell me about the professors at SSET?",
                    "Who are the instructors at the college?",
                    "faculties",
                    "professors",
                    "teachers"

                ],
                "responses": [
                    "Our faculty members are highly qualified and experienced professionals dedicated to providing quality education and guidance to students. With expertise in their respective fields, they strive to create an engaging learning environment conducive to academic excellence and personal growth.",
                    "At our institution, we take pride in our faculty members who are renowned experts in their fields. Committed to nurturing the next generation of leaders, our faculty blend academic rigor with practical insights to empower students for success in their chosen endeavors.",
                    "Our faculty members bring a wealth of knowledge and experience to the classroom, enriching the learning experience for our students. With a passion for teaching and mentorship, they inspire students to reach their full potential and become future leaders in their fields.",
                    "The cornerstone of our institution's success lies in our dedicated faculty members who are committed to academic excellence and student success. With a diverse range of backgrounds and expertise, they foster a supportive learning environment where students can thrive and excel.",
                    "Our faculty members are not just educators but mentors, guiding students on their academic and professional journey. With a student-centric approach to teaching, they go above and beyond to ensure that every student receives personalized attention and support to achieve their goals.",
                    "At our institution, we believe that the quality of education is defined by the caliber of our faculty members. With a team of experienced academics and industry practitioners, we offer students a unique blend of theoretical knowledge and practical insights to prepare them for real-world challenges.",
                    "Our faculty members are at the forefront of their respective fields, conducting groundbreaking research and making significant contributions to their disciplines. As educators, they bring this wealth of expertise into the classroom, inspiring students to think critically and pursue excellence in their studies.",
                    "With a focus on student-centered learning, our faculty members are dedicated to fostering a culture of academic excellence and innovation. Through their passion for teaching and commitment to student success, they empower students to become lifelong learners and leaders in their chosen fields.",
                    "Our institution is proud to have a team of accomplished faculty members who are passionate about their subjects and dedicated to student success. Through their mentorship and guidance, they instill in students a love for learning and equip them with the skills and knowledge needed to excel in their academic and professional endeavors.",
                    "Our faculty members are committed to providing students with a transformative learning experience that goes beyond the classroom. With a holistic approach to education, they encourage intellectual curiosity, creativity, and critical thinking skills essential for success in today's dynamic world."
                ]
            },

            {
                "tag": "events",
                "patterns": [
                    "Are there any upcoming events at the college?",
                    "Tell me about the events happening in SSET.",
                    "What events are organized by the college?",
                    "Can you provide information about college events?",
                    "events",
                    "events organised",
                    "list of events",
                    "Fests in college",
                    "fest",
                    "technical fest",
                    "cultural fest",
                    "Does SSET have fests?",
                    "list of events organised in college",
                    "list of events conducted in college",
                    "What events are conducted in college",
                    "Are there any event held at college",
                    "Events?",
                    "functions",
                    "what are the events",
                    "tell me about events",
                    "what about events",
                    "fests"

                ],
                "responses": [
                    "Stay updated with the latest events and activities at SSET by checking our official website or following our social media channels!",
                    "Don't miss out on exciting events and activities at SSET! Stay in the loop by visiting our official website or following us\n on social media. Get ready to be part of a vibrant and engaging community!",
                    "Stay connected and informed with SSET's latest updates! Whether it's campus events, workshops, or seminars, you can stay updated\n by checking our website or following us on social media. Join the conversation and be part of the action!",
                    "Stay in the know with SSET's official channels! From guest lectures to cultural festivals, there's always something happening on campus.\n Follow us on social media or visit our website to stay updated on all the latest events and activities.",
                    "Get plugged into SSET's dynamic community! Stay informed about upcoming events and activities by checking our official website\n or following us on social media. Join us as we celebrate achievements, foster creativity, and build lasting connections.",
                    "Stay connected with SSET's vibrant community! Stay updated on all the exciting events and activities happening on campus by visiting\n our website or following us on social media. Get ready to immerse yourself in a world of learning and discovery!",
                    "Stay informed and engaged with SSET's official channels! From academic conferences to cultural performances, there's always something\n happening at our institution. Follow us on social media or check our website to stay up-to-date on all the latest events.",
                    "Stay in the loop with SSET's official announcements! Be the first to know about upcoming events, workshops, and activities by checking\n our website regularly or following us on social media. Join us as we create memorable experiences and opportunities for growth.",
                    "Stay connected with SSET's vibrant community! Whether it's career fairs, hackathons, or sports tournaments, there's always something\n exciting happening on campus. Follow us on social media or visit our website to stay updated on all the latest events and activities.",
                    "Stay informed about all things SSET! From academic symposiums to cultural showcases, there's something for everyone to enjoy.\n Follow us on social media or visit our website to stay up-to-date on upcoming events and activities.",
                    "Stay up-to-date with SSET's bustling campus life! From student-led initiatives to faculty lectures, there's never a dull moment here.\n Check our website regularly or follow us on social media to stay informed about all the latest happenings."
                ]

            },
            {
                "tag": "placements",
                "patterns": [
                    "How are the placements at SSET?",
                    "Tell me about the placement opportunities.",
                    "Can you provide information about campus placements?",
                    "What companies visit SSET for placements?",
                    "placements",
                    "What is the placement record of SSET?",
                    "Are there placement training programs available?",
                    "Can you share some success stories of SSET alumni in placements?",
                    "What is the average salary package offered during placements?",
                    "Do students receive assistance in resume building and interview preparation for placements?",
                    "Is there a placement cell at SSET?"
                ],

                "responses": [
                    "SSET has a dedicated placement cell that organizes campus recruitment drives, workshops, and training sessions to enhance students' employability.\n Our students have secured placements in leading companies across various sectors.",
                    "At SSET, we prioritize students' career readiness through our dedicated placement cell. From organizing recruitment drives to conducting workshops\n and training sessions, we ensure our students are well-prepared for the professional world. Join us and pave the way to a successful career!",
                    "Unlock your career potential with SSET's placement cell! Our team works tirelessly to connect students with leading companies through campus recruitment\n drives and industry-focused workshops. With our support, you'll be ready to embark on a fulfilling career journey.",
                    "Prepare for success with SSET's placement assistance program. Our dedicated placement cell provides students with invaluable resources, including recruitment\n drives, workshops, and training sessions. Join us and gain a competitive edge in the job market!",
                    "At SSET, we're committed to helping students transition seamlessly from academia to industry. Our placement cell offers a range of services, from organizing\n recruitment events to providing personalized career guidance. Let us help you kickstart your career on the right foot!",
                    "Empower your future with SSET's placement cell. Our comprehensive program equips students with the skills and confidence needed to excel in the job market.\n Join us and take advantage of our industry connections and career development opportunities.",
                    "At SSET, we go the extra mile to ensure our students are well-prepared for the workforce. Our placement cell offers a wide range of services, including resume\n building, interview preparation, and networking opportunities. With our support, you'll be ready to seize your dream job.",
                    "Take charge of your career with SSET's placement assistance program. Our dedicated team works closely with students to identify their strengths and career goals,\n providing personalized support every step of the way. Join us and unlock endless opportunities for professional growth.",
                    "SSET's placement cell is your gateway to success in the professional world. From arranging campus recruitment drives to offering career counseling services,\n we're here to support you in achieving your career aspirations. Partner with us and embark on a rewarding career journey.",
                    "Prepare for the future with SSET's placement cell by your side. Our team of industry experts and career advisors is committed to helping students secure\n lucrative job opportunities. Join us and take the first step towards a bright and promising career.",
                    "Transform your career prospects with SSET's placement assistance program. Our holistic approach to career development includes personalized guidance,\n skill-building workshops, and networking events with top employers. Join us and turn your dreams into reality!"

                ]
            },
            {
                "tag": "scholarships",
                "patterns": [
                    "Are there any scholarships available at SSET?",
                    "Tell me about the scholarship opportunities.",
                    "Can you provide information about college scholarships?",
                    "scholarships",
                    "How can I apply for scholarships at SSET?",
                    "Are there merit-based scholarships?",
                    "What are the eligibility criteria for scholarships?",
                    "Do you offer need-based financial aid?",
                    "Can international students apply for scholarships?",
                    "Are there any specific scholarships for students from underprivileged backgrounds?",
                    "Is there a deadline for scholarship applications?"
                ],

                "responses": [
                    "SSET offers scholarships to deserving students based on merit, financial need, and other criteria.\n Contact the college administration or visit our website for details on available scholarships and eligibility criteria.",
                    "Unlock your potential with SSET's scholarship opportunities! We provide financial assistance to deserving students based on various criteria. Reach out to our college administration or visit our website to learn more about the scholarships available and their eligibility requirements.",
                    "At SSET, we believe in making education accessible to all. That's why we offer scholarships to qualified students based on merit, financial need,\n and other factors. Don't miss out on this opportunity - check our website or contact us for details on how to apply.",
                    "Invest in your future with SSET's scholarship program. We're dedicated to supporting talented and motivated students through financial aid\n packages tailored to their individual circumstances. For information on available scholarships and eligibility criteria, get in touch with our college administration today.",
                    "SSET is committed to recognizing and rewarding academic excellence. Our scholarship program provides opportunities for deserving students to\n pursue their educational goals without financial burden. Reach out to us to explore the scholarships available and see if you qualify.",
                    "Take the first step towards your academic dreams with SSET's scholarships. Whether you excel academically or demonstrate financial need, there\n may be a scholarship opportunity waiting for you. Contact us to learn more about eligibility requirements and application procedures.",
                    "Dream big with SSET's scholarship offerings! We understand the importance of supporting students in their educational journey, which is why we\n offer scholarships based on merit, financial need, and other criteria. Reach out to us today to explore your options.",
                    "Empowering students through education is our mission at SSET. Our scholarship program aims to make higher education accessible to all deserving\n individuals. Visit our website or contact our college administration for comprehensive information on available scholarships and how to apply.",
                    "At SSET, we're dedicated to helping students succeed. Our scholarship opportunities provide financial assistance to deserving individuals, ensuring\n that no talented student is held back by financial constraints. Connect with us to discover the scholarships you may be eligible for.",
                    "SSET is proud to offer scholarships to exceptional students who demonstrate academic merit and financial need. If you're ready to pursue your\n academic goals with financial support, don't hesitate to reach out to us for details on available scholarships and application procedures.",
                    "Invest in your education with SSET's scholarship program. Our institution recognizes the importance of providing financial aid to deserving students,\n and we're committed to making higher education more accessible. Contact us today to learn about the scholarships we offer and how to apply."
                ]
            },
            {
                "tag": "extracurricular",
                "patterns": [
                    "What extracurricular activities are available at SSET?",
                    "Tell me about the clubs and societies in the college.",
                    "Can you provide information about extracurricular opportunities?",
                    "extracurriculars",
                    "extra activities",
                    "How can I get involved in extracurriculars?",
                    "Are there any leadership opportunities in extracurriculars?",
                    "What sports teams are available for students?",
                    "Are there any community service opportunities?",
                    "Can you tell me about cultural events organized by the college?",
                    "Are there any performing arts groups at SSET?"
                ],

                "responses": [
                    "SSET encourages students to participate in a wide range of extracurricular activities\n including clubs, cultural events, sports, and more.\n Get involved and explore your interests outside the classroom!",
                    "SSET prides itself on offering a diverse array of extracurricular activities that cater\n to the varied interests of our student body. Whether you're drawn to the stage, the field, or the lab,\n there's a place for you to thrive and grow.",
                    "Engage, explore, excel - that's the motto of SSET's extracurricular program.\n Dive into a world of opportunities where you can develop leadership skills, cultivate talents, and forge lifelong connections.",
                    "Step into a world of possibilities at SSET, where our extracurricular activities are designed to complement and enhance your academic experience.\n Embrace new challenges, unleash your creativity,\n and make the most of your time outside the classroom.",
                    "At SSET, we believe that true learning happens beyond textbooks. That's why we offer an extensive range of extracurricular activities\n that foster creativity, critical thinking, and collaboration.",
                    "Join the SSET community and embark on a journey of self-discovery through our vibrant extracurricular offerings. Whether you're a budding artist,\n an aspiring athlete, or a future leader, you'll find your place here.",
                    "From coding clubs to community service projects, SSET's extracurricular activities provide students with opportunities to make a positive impact, both within the school and beyond.",
                    "At SSET, we believe in the power of experiential learning. Our extracurricular activities allow students to apply classroom knowledge in real-world contexts,\n gaining invaluable skills and insights along the way.",
                    "Unleash your creativity and passion at SSET's extracurricular hub, where innovation knows no bounds. Join clubs, attend workshops, and take part in competitions to broaden your horizons and unlock your potential.",
                    "SSET's extracurricular activities are more than just hobbies - they're pathways to personal growth and fulfillment. Discover your strengths, overcome challenges, and leave your mark on the world.",
                    "Embrace the spirit of exploration at SSET, where every extracurricular activity is an opportunity to learn, grow, and contribute to something greater than yourself. Join us and let your journey begin!"

                ]
            },
            {
                "tag": "library",
                "patterns": [
                    "Tell me about the college library.",
                    "What resources are available in the library?",
                    "Can I borrow books from the library?",
                    "What are the library hours?",
                    "library"
                ],
                "responses": [
                    "The college library is a cozy place where you can find a vast collection of books, journals, and digital resources.\n Whether you're studying for exams or exploring new topics, our library has something for everyone.\n Feel free to drop by during library hours and discover the world of knowledge!",
                    "Step into the serene ambiance of our college library, where endless possibilities await. With a diverse collection of books,\n journals, and digital resources, our library is your gateway to knowledge and exploration.\n Come and immerse yourself in the world of learning!",
                    "Escape into the world of books and knowledge at our college library. Whether you seek academic resources or simply wish to indulge\n in leisure reading, our cozy library provides the perfect retreat. Visit us during\n library hours and embark on a journey of discovery!",
                    "Discover a haven of learning at our college library. With its vast collection of books, journals, and digital resources, the library\n is the heart of academic life on campus. Explore new subjects, conduct research,\n or simply unwind with a good book. The possibilities are endless!",
                    "Welcome to our college library, a sanctuary for the curious mind. From classic literature to cutting-edge research, our library\n offers something for every intellectual appetite. Join us during library hours and delve\n into the treasure trove of knowledge that awaits!",
                    "Experience the magic of our college library, where words come to life and imaginations soar. Whether you're seeking information,\n inspiration, or simply a quiet place to study, our library has you covered. Drop by during\n library hours and let the adventure begin!",
                    "Enter the world of endless learning at our college library. With its extensive collection of resources spanning various disciplines,\n our library is a paradise for knowledge seekers.\n Come and explore the wealth of information that awaits within our walls!",
                    "Step into our college library and embark on a journey of intellectual exploration. With its vast array of books, journals, and\n digital resources, the library is a treasure trove waiting to be discovered.\n Visit us during library hours and expand your horizons!",
                    "Welcome to our college library, where the pursuit of knowledge knows no bounds. Whether you're seeking academic resources or\n simply craving a quiet place to study, our library offers the perfect environment.\n Stop by during library hours and let the learning begin!",
                    "Discover the joy of reading and learning at our college library. With its cozy atmosphere and extensive collection of resources,\n the library provides the ideal setting for academic growth and personal enrichment.\n Join us during library hours and unlock the doors to knowledge!",
                    "Experience the wonders of our college library, a hub of academic excellence and intellectual curiosity. Whether you're conducting\n research, studying for exams, or simply exploring new interests, our library is your go-to destination.\n Drop by during library hours and immerse yourself in the world of ideas!"
                ]
            },
            {
                "tag": "cafeteria",
                "patterns": [
                    "What's on the menu at the college cafeteria?",
                    "Tell me about the food options available.",
                    "Can I get snacks at the cafeteria?",
                    "What are the cafeteria hours?",
                    "cafe",
                    "I'm hungry, what's available at the cafeteria?",
                    "Are there vegetarian options at the cafeteria?",
                    "Is there a coffee shop on campus?",
                    "How much does the food cost at the cafeteria?",
                    "Are there any special discounts for students at the cafeteria?",
                    "What are the popular dishes served at the cafeteria?"


                ],
                "responses": [
                    "Our college cafeteria is the perfect spot to grab a quick bite or enjoy a delicious meal with friends.\n From tasty snacks to hearty meals, we have a variety of options to satisfy your hunger.\n Swing by during cafeteria hours and treat yourself to some tasty treats!",
                    "Indulge your taste buds at our college cafeteria, where delicious delights await! Whether you're craving a quick snack or a satisfying meal, our diverse menu has something for everyone. Join us during cafeteria hours and savor the flavors of our culinary creations!",
                    "Experience culinary excellence at our college cafeteria, your go-to destination for mouthwatering meals and delightful snacks. With a variety of options to choose from, you'll never go hungry. Swing by during cafeteria hours and treat yourself to a culinary adventure!",
                    "Treat yourself to a culinary journey at our college cafeteria, where good food and great company come together. From tasty snacks to wholesome meals, our menu caters to all tastes and preferences. Drop by during cafeteria hours and enjoy a delicious dining experience with friends!",
                    "Satisfy your cravings at our college cafeteria, the ultimate destination for delicious dining on campus. With an array of tempting treats and flavorful meals, there's something to please every palate. Don't miss out - swing by during cafeteria hours and indulge in culinary delights!",
                    "Discover a world of flavor at our college cafeteria, where every meal is a culinary adventure. Whether you're in the mood for something savory or sweet, our diverse menu has you covered. Join us during cafeteria hours and experience the joy of good food and great company!",
                    "At our college cafeteria, we believe that good food brings people together. From comforting classics to innovative dishes, our menu is designed to delight your taste buds. Swing by during cafeteria hours and enjoy a delicious meal in a warm and welcoming atmosphere!",
                    "Experience the ultimate dining experience at our college cafeteria, your one-stop destination for delicious meals and delightful snacks. With a wide range of options to choose from, there's something to satisfy every craving. Don't miss out - swing by during cafeteria hours and treat yourself to a culinary delight!",
                    "Indulge in a culinary adventure at our college cafeteria, where every dish is crafted with care and passion. From fresh salads to hearty entrees, our menu features a variety of mouthwatering options. Join us during cafeteria hours and discover the joy of great food and good company!",
                    "At our college cafeteria, we believe that food should be more than just sustenance - it should be an experience. That's why we offer a diverse menu of delicious dishes and flavorful snacks to tantalize your taste buds. Swing by during cafeteria hours and embark on a culinary journey with us!",
                    "Treat yourself to a culinary feast at our college cafeteria, where every bite is a celebration of flavor. From gourmet sandwiches to decadent desserts, our menu is sure to satisfy your cravings. Join us during cafeteria hours and experience the magic of good food and great company!"
                ]
            },
            {
                "tag": "student_support",
                "patterns": [
                    "Is there support available for students?",
                    "Tell me about the student support services.",
                    "Can I get help with academic or personal issues?",
                    "Who can I talk to for support?",
                    "student support",
                    "Are there any services for students in need of assistance?",
                    "How can I seek help for academic challenges?",
                    "What resources are available to support students?",
                    "Where can I find assistance with personal matters?",
                    "Do you provide support for students facing difficulties?"
                ],
                "responses": [
                    "At SSET, we understand that college life can be challenging at times, which is why we offer a range of student support services \nto help you succeed. Whether you need academic assistance, counseling, or guidance, our dedicated team is here\n to support you every step of the way. Don't hesitate to reach out\n if you need help - we're here for you!",
                    "At SSET, we prioritize your well-being and success. Our student support services are designed to provide you with the assistance and guidance you need to navigate college life with confidence. Remember, you're never alone - our dedicated team is here to support you whenever you need it.",
                    "College life comes with its challenges, but at SSET, you don't have to face them alone. Our student support services offer a helping hand whenever you need it, whether it's academic guidance, counseling, or just someone to talk to. Reach out to us - we're here to support you every step of the way.",
                    "Your success is our priority at SSET. That's why we offer a comprehensive range of student support services to ensure that you have the resources and assistance you need to thrive. No matter what challenges you may face, our dedicated team is here to help you overcome them.",
                    "At SSET, we believe in empowering our students to succeed both academically and personally. Our student support services provide a safety net for those times when you need a little extra help or guidance. Don't hesitate to reach out - we're here to support you in any way we can.",
                    "Navigating college life can be daunting, but you don't have to do it alone. At SSET, our student support services are here to provide you with the assistance and resources you need to succeed. Whether it's academic advice, counseling, or just a listening ear, we're here for you every step of the way.",
                    "College is a time of growth and discovery, but it can also come with its challenges. At SSET, our student support services are designed to help you overcome those challenges and reach your full potential. Whatever you need - whether it's tutoring, counseling, or just a friendly face - we're here for you.",
                    "At SSET, we understand that college life can be overwhelming at times. That's why we offer a range of student support services to help you navigate the ups and downs of academic and personal life. No problem is too big or too small - our team is here to support you whenever you need it.",
                    "Your well-being is our top priority at SSET. Our student support services are here to provide you with the resources and assistance you need to thrive academically and personally. Whether you're struggling with coursework, personal issues, or anything in between, we're here to help - just reach out.",
                    "College is an exciting but challenging time, and at SSET, we're here to support you every step of the way. Our student support services offer a range of resources and assistance to help you navigate the complexities of college life. Don't hesitate to reach out - we're here to help you succeed.",
                    "At SSET, we believe in fostering a supportive and inclusive environment where every student can thrive. Our student support services are here to provide you with the assistance and guidance you need to succeed academically and personally. Whatever challenges you may face, know that you can always count on us for support."
                ]
            },
            {
                "tag": "student_life",
                "patterns": [
                    "What is student life like at SSET?",
                    "Tell me about the student community.",
                    "Are there any student clubs or organizations?",
                    "What activities can I participate in?",
                    "student life",
                    "Can you provide information about student life at SSET?",
                    "What does the student community look like at SSET?",
                    "I'm interested in getting involved in student activities. Where can I start?",
                    "How can I be a part of the student community at SSET?",
                    "What opportunities are there for student engagement outside of academics?"
                ],
                "responses": [
                    "Student life at SSET is vibrant and exciting, with plenty of opportunities to explore your interests, make new friends, and create lasting memories.\n Whether you're joining a student club, attending events, or participating in extracurricular activities, there's always something happening on campus. Get involved and make the most of your college experience!",
                    "Experience the vibrant pulse of student life at SSET, where every day is filled with endless possibilities. From joining clubs to attending events, our campus offers a dynamic environment for personal growth and exploration. Embrace the excitement and make your mark on campus!",
                    "Immerse yourself in the rich tapestry of student life at SSET, where opportunities for growth and connection abound. Whether you're pursuing your passions through extracurricular activities or forging friendships in student clubs, there's never a dull moment on campus. Dive in and embrace the adventure!",
                    "At SSET, student life is more than just academics - it's a vibrant mosaic of experiences waiting to be explored. From cultural festivals to sports tournaments, our campus is alive with energy and excitement. Come and be a part of the action!",
                    "Discover the heartbeat of student life at SSET, where every corner of campus is buzzing with activity. Whether you're attending workshops, volunteering in the community, or simply hanging out with friends, there's always something to do and someone to connect with. Join us and be part of the SSET family!",
                    "Step into a world of endless possibilities at SSET, where student life is a whirlwind of activity and excitement. From academic clubs to cultural events, there's something for everyone to enjoy. Don't miss out - come and be a part of the vibrant community at SSET!",
                    "Embark on a journey of self-discovery and growth at SSET, where student life is a vibrant mosaic of experiences. Whether you're exploring new interests, expanding your network, or challenging yourself in extracurricular activities, our campus offers endless opportunities for personal and academic development. Dive in and make the most of your college experience!",
                    "At SSET, student life is a vibrant tapestry of experiences waiting to be woven. From leadership opportunities to cultural celebrations, our campus offers a myriad of ways to get involved and make a difference. Join us and discover the richness of student life at SSET!",
                    "Experience the pulse of student life at SSET, where every day is an adventure waiting to unfold. Whether you're attending lectures, participating in clubs, or volunteering in the community, our campus offers countless opportunities for growth and discovery. Seize the moment and make the most of your college journey!",
                    "Unlock the full potential of your college experience at SSET, where student life is a dynamic blend of academics, extracurricular activities, and personal growth opportunities. From academic competitions to cultural showcases, there's never a shortage of things to do and see on campus. Come and be a part of the excitement!",
                    "At SSET, student life is a vibrant mosaic of experiences, passions, and friendships waiting to be explored. Whether you're pursuing your academic goals, participating in clubs, or volunteering in the community, our campus offers endless opportunities for personal and professional growth. Embrace the journey and create memories that will last a lifetime!"
                ]
            },
            {
                "tag": "hostel",
                "patterns": [
                    "hostel facility",
                    "hostel servive",
                    "hostel location",
                    "hostel address",
                    "hostel facilities",
                    "hostel fees",
                    "Does college provide hostel",
                    "Is there any hostel",
                    "Where is hostel",
                    "do you have hostel",
                    "do you guys have hostel",
                    "hostel",
                    "hostel capacity",
                    "what is the hostel fee",
                    "how to get in hostel",
                    "what is the hostel address",
                    "how far is hostel from college",
                    "hostel college distance",
                    "where is the hostel",
                    "how big is the hostel",
                    "distance between college and hostel",
                    "distance between hostel and college"

                ],
                "responses": [
                    " SSET has well-designed state-of-the-art hostels both for boys and girls.\n It has got a separate hostels for 1st year boys and girls \n and senior hostels housing from 2nd to 4th years.",
                    "Experience the comfort of home away from home at SSET's well-designed hostels. With separate accommodations for first-year students and senior residents, our state-of-the-art hostels provide a safe and welcoming environment for all.",
                    "Discover the convenience of on-campus living at SSET's modern hostels. From spacious rooms to recreational facilities, our hostels offer everything you need for a comfortable stay. Join our vibrant hostel community and make the most of your college experience!",
                    "At SSET, we prioritize student well-being with our state-of-the-art hostel facilities. With separate accommodations for first-year and senior students, our hostels provide a supportive environment where students can thrive academically and socially.",
                    "Enjoy the convenience of living on campus at SSET's well-designed hostels. With separate facilities for first-year students and senior residents, our hostels offer a comfortable and secure environment for students to live and learn.",
                    "Make yourself at home at SSET's modern hostels, where comfort meets convenience. With separate accommodations for first-year students and senior residents, our hostels provide a supportive community for students to grow and succeed.",
                    "Experience the best of campus living at SSET's state-of-the-art hostels. From spacious rooms to recreational facilities, our hostels are designed to meet the needs of students at every stage of their academic journey.",
                    "Discover the joys of living in a vibrant community at SSET's well-equipped hostels. With separate accommodations for first-year students and senior residents, our hostels offer a supportive environment where students can thrive both academically and socially.",
                    "Experience the comfort and convenience of on-campus living at SSET's modern hostels. With separate facilities for first-year students and senior residents, our hostels provide a safe and welcoming home-away-from-home for students from all walks of life.",
                    "At SSET, we believe in providing students with a supportive living environment that enhances their college experience. With well-designed hostels for both first-year and senior students, our campus accommodations are second to none.",
                    "Discover the benefits of on-campus living at SSET's state-of-the-art hostels. With separate accommodations for first-year students and senior residents, our hostels offer a sense of community and belonging that enhances the overall college experience."
                ]
            },
            {
                "tag": "student_clubs",
                "patterns": [
                    "What are the different clubs available at SSET?",
                    "Can you provide information about the student clubs in SSET?",
                    "I'm interested in joining a club. What options are available?",
                    "Tell me more about the extracurricular activities at SSET.",
                    "Are there any student-run organizations at the college?",
                    "clubs and extracurricular activities",
                    "How can I get involved in student clubs?",
                    "What opportunities are there for involvement in clubs?",
                    "Student clubs and activities at SSET",
                    "Are there any opportunities for student engagement outside of academics?",
                    "clubs"
                ],
                "responses": [
                    "Discover the vibrant student life at SSET through our diverse range of student clubs and organizations. From academic and professional clubs to cultural and recreational groups, there's something for everyone. Join a club today and unlock new experiences, friendships, and opportunities for personal growth!",
                    "At SSET, we believe in fostering a vibrant campus community through student-led clubs and organizations. Explore our diverse range of clubs, including academic, cultural, and recreational groups, and find your passion. Join a club today and be part of something special!",
                    "Looking to explore your interests and make lasting connections? Look no further than SSET's student clubs! With a wide range of options, including academic, cultural, and recreational clubs, there's something for everyone. Join a club today and start making memories!",
                    "Student clubs are a vital part of the SSET experience, offering opportunities for personal and professional growth outside of the classroom. Whether you're interested in technology, arts, sports, or community service, there's a club for you. Get involved and make the most of your college experience!",
                    "Joining a student club is a great way to enhance your college experience and make lifelong connections. At SSET, we offer a variety of clubs spanning different interests and disciplines. Explore our clubs today and find your community!",
                    "Embark on a journey of self-discovery and growth with SSET's student clubs. Whether you're interested in technology, arts, or sports, there's a club for you. Join a club today and expand your horizons!",
                    "Get ready to dive into the exciting world of student clubs at SSET! From academic and professional groups to cultural and recreational clubs, there's something for everyone. Join a club today and unlock endless opportunities for learning and fun!",
                    "Discover your passion and make a difference with SSET's student clubs! With a diverse range of options, including academic, cultural, and recreational clubs, there's something for every interest. Join a club today and start making memories!",
                    "Looking to get involved on campus? Join one of SSET's student clubs! Whether you're interested in technology, arts, or community service, there's a club for you. Explore our clubs today and find your niche!",
                    "Experience the vibrant student life at SSET through our dynamic student clubs! Join a club today and connect with peers who share your interests. From academic and professional clubs to cultural and recreational groups, there's something for everyone!"
                ]
            },
            {
                "tag": "alumni_support",
                "patterns": [
                    "Is there support available for alumni?",
                    "Tell me about the alumni support services.",
                    "Can alumni get assistance with career or networking?",
                    "Who can alumni talk to for support?",
                    "alumni support",
                    "Are there any services for alumni in need of assistance?",
                    "How can alumni seek help for career challenges?",
                    "What resources are available to support alumni?",
                    "Where can alumni find assistance with professional matters?",
                    "Do you provide support for alumni facing difficulties?",
                    "Alumni"
                ],
                "responses": [
                    "SSET offers support services for alumni seeking assistance with career or networking opportunities. Our alumni support team is here to help.",
                    "Discover a range of alumni support services at SSET designed to assist you with career advancement and networking. Our goal is to ensure that our alumni continue to thrive beyond graduation.",
                    "Yes, alumni can receive assistance with career or networking through our alumni support services. Feel free to reach out to our alumni support team for guidance.",
                    "If you're an alum seeking support, don't hesitate to reach out. Our staff members are here to provide assistance and resources to help you navigate your career.",
                    "Explore the various support services available for alumni at SSET, including career counseling, networking events, and job placement assistance.",
                    "At SSET, we understand the importance of supporting our alumni community. That's why we offer a variety of services to assist alumni in their professional endeavors.",
                    "If you're an alum facing career challenges, know that you're not alone. Our alumni support services are here to provide guidance and assistance.",
                    "Our alumni support services aim to provide assistance to graduates in need of career guidance, networking opportunities, and professional development resources.",
                    "For support with career challenges or professional matters, alumni can contact our alumni support team. We're here to help you achieve success in your career.",
                    "SSET is committed to supporting our alumni community. Don't hesitate to reach out if you require assistance or resources to further your career."
                ]
            },
            {
                "tag": "research_support",
                "patterns": [
                    "Is there support available for research?",
                    "Tell me about the research support services.",
                    "Can I get assistance with research projects?",
                    "Who can I talk to for research support?",
                    "research support",
                    "Are there any services for researchers in need of assistance?",
                    "How can I seek help for research challenges?",
                    "What resources are available to support research?",
                    "Where can I find assistance with research projects?",
                    "Do you provide support for researchers facing difficulties?",
                    "Research"
                ],
                "responses": [
                    "SSET offers support services for research endeavors, providing assistance with projects, funding opportunities, and collaboration initiatives.",
                    "Discover a range of research support services at SSET designed to assist researchers in their endeavors. Our goal is to foster a culture of innovation and discovery.",
                    "Yes, researchers can receive assistance with projects and funding opportunities through our research support services. Feel free to reach out to our research team for guidance.",
                    "If you're a researcher seeking support, don't hesitate to reach out. Our staff members are here to provide assistance and resources to help you advance your research.",
                    "Explore the various support services available for researchers at SSET, including project management, grant writing assistance, and access to research facilities.",
                    "At SSET, we understand the importance of supporting research initiatives. That's why we offer a variety of services to assist researchers in their endeavors.",
                    "If you're a researcher facing challenges in your projects, know that you're not alone. Our research support services are here to provide guidance and assistance.",
                    "Our research support services aim to provide assistance to researchers in need of project support, funding opportunities, and collaboration resources.",
                    "For support with research challenges or project assistance, researchers can contact our research support team. We're here to help you achieve success in your research endeavors.",
                    "SSET is committed to supporting research excellence. Don't hesitate to reach out if you require assistance or resources to further your research goals."
                ]
            },
            {
                "tag": "internship_support",
                "patterns": [
                    "Is there support available for internships?",
                    "Tell me about the internship support services.",
                    "Can I get assistance with finding internships?",
                    "Who can I talk to for internship support?",
                    "internship support",
                    "Are there any services for students seeking internships?",
                    "How can I seek help for internship opportunities?",
                    "What resources are available to support internships?",
                    "Where can I find assistance with internship placements?",
                    "Do you provide support for students seeking internships?",
                    "Internship"
                ],
                "responses": [
                    "SSET offers support services for students seeking internships, providing assistance with finding opportunities, application guidance, and networking.",
                    "Discover a range of internship support services at SSET designed to assist students in securing valuable work experiences. Our goal is to help students bridge the gap between academia and industry.",
                    "Yes, students can receive assistance with finding internships through our internship support services. Feel free to reach out to our career services team for guidance.",
                    "If you're a student seeking internship support, don't hesitate to reach out. Our staff members are here to provide assistance and resources to help you secure valuable internships.",
                    "Explore the various support services available for students seeking internships at SSET, including resume building, interview preparation, and access to internship opportunities.",
                    "At SSET, we understand the importance of gaining practical experience through internships. That's why we offer a variety of services to assist students in securing valuable internships.",
                    "If you're a student facing challenges in finding internships, know that you're not alone. Our internship support services are here to provide guidance and assistance.",
                    "Our internship support services aim to provide assistance to students in need of internship opportunities, application support, and networking resources.",
                    "For support with internship opportunities or application assistance, students can contact our career services team. We're here to help you gain valuable work experiences.",
                    "SSET is committed to supporting students in their pursuit of internships. Don't hesitate to reach out if you require assistance or resources to secure valuable internship opportunities."
                ]
            },
            {
                "tag": "sustainability_support",
                "patterns": [
                    "Is there support available for sustainability initiatives?",
                    "Tell me about the sustainability support services.",
                    "Can I get assistance with sustainability projects?",
                    "Who can I talk to for sustainability support?",
                    "sustainability",
                    "sustainability support",
                    "Are there any services for individuals interested in sustainability?",
                    "How can I seek help for sustainability initiatives?",
                    "What resources are available to support sustainability efforts?",
                    "Where can I find assistance with sustainability projects?",
                    "Do you provide support for sustainability initiatives?"
                ],
                "responses": [
                    "SSET offers support services for sustainability initiatives, providing assistance with projects, resources, and community engagement efforts.",
                    "Discover a range of sustainability support services at SSET designed to assist individuals and groups in their efforts to promote environmental stewardship and social responsibility.",
                    "Yes, individuals can receive assistance with sustainability projects through our sustainability support services. Feel free to reach out to our sustainability team for guidance.",
                    "If you're passionate about sustainability and seeking support, don't hesitate to reach out. Our staff members are here to provide assistance and resources to help you make a positive impact.",
                    "Explore the various support services available for sustainability initiatives at SSET, including project development, outreach programs, and access to sustainability resources.",
                    "At SSET, we understand the importance of promoting sustainability. That's why we offer a variety of services to assist individuals and groups in their sustainability efforts.",
                    "If you're facing challenges in implementing sustainability initiatives, know that you're not alone. Our sustainability support services are here to provide guidance and assistance.",
                    "Our sustainability support services aim to provide assistance to individuals and groups in need of support for sustainability projects, community engagement, and resource management.",
                    "For support with sustainability initiatives or project assistance, individuals can contact our sustainability team. We're here to help you make a positive impact on the environment and society.",
                    "SSET is committed to supporting sustainability efforts. Don't hesitate to reach out if you require assistance or resources to promote environmental stewardship and social responsibility."
                ]
            },
            {
                "tag": "examinations",
                "patterns": [
                    "What is the examination schedule?",
                    "Can you provide information about upcoming exams?",
                    "When are the exams?",
                    "How are examinations conducted?",
                    "examinations",
                    "exams",
                    "Is there a timetable for exams?",
                    "What is the exam pattern?",
                    "Where can I find exam-related information?",
                    "Do you have any tips for preparing for exams?",
                    "Are there any guidelines for appearing in exams?"
                ],
                "responses": [
                    "The examination schedule is available on our college website and notice boards. Students can also check with their respective departments for specific exam dates.",
                    "Information about upcoming exams, including dates, times, and venues, is typically communicated through official channels such as email, notices, and the college website.",
                    "Exams are usually scheduled according to the academic calendar. Students should refer to the official timetable for exam dates and times.",
                    "Examinations are conducted in accordance with the rules and regulations set by the university or college. Students are required to follow the instructions provided by the exam invigilators.",
                    "For exam-related queries, students can refer to the examination section on the college website or contact the examination office for assistance.",
                    "Yes, there is a timetable available for exams which is accessible through the college portal or notice boards.",
                    "The exam pattern may vary depending on the course and subject. Students are advised to review the syllabus and previous question papers for exam preparation.",
                    "Exam-related information, including timetables, guidelines, and instructions, can be found on the college website or obtained from the examination office.",
                    "To prepare for exams effectively, students should create a study schedule, review course materials regularly, seek clarification on doubts, and practice solving previous years' question papers.",
                    "Guidelines for appearing in exams, such as exam hall rules, permitted materials, and exam duration, are provided to students prior to the examination date."
                ]
            },
            {
                "tag": "infrastructure",
                "patterns": [
                    "Tell me about the college infrastructure.",
                    "What facilities are available on campus?",
                    "Can you describe the infrastructure of SSET?",
                    "Infrastructure",
                    "infrastructure",
                    "What are the amenities provided by the college?",
                    "Infrastructure facilities",
                    "What is the campus like?",
                    "Can you give an overview of the college's physical facilities?",
                    "Infrastructure at SSET",
                    "What are the features of the college campus?"
                ],
                "responses": [
                    "SSET boasts modern infrastructure equipped with state-of-the-art facilities to support academic and extracurricular activities. Our campus features well-equipped classrooms, laboratories, library, sports facilities, hostel accommodation, and more.",
                    "The college infrastructure at SSET is designed to provide students with a conducive learning environment and a comfortable campus life. From spacious classrooms to advanced laboratories, we ensure that students have access to all the necessary facilities for their academic journey.",
                    "At SSET, we take pride in our world-class infrastructure that includes well-equipped labs, libraries, seminar halls, auditoriums, and sports facilities. Our campus is designed to foster innovation, creativity, and holistic development among students.",
                    "The infrastructure at SSET is designed to meet the needs of students, faculty, and staff alike. Our campus features modern buildings, well-maintained grounds, and facilities such as labs, libraries, sports complexes, and student centers.",
                    "From classrooms to laboratories, from libraries to recreational spaces, SSET's infrastructure is geared towards providing students with the best possible learning environment. Our campus is equipped with modern amenities to support academic and extracurricular activities.",
                    "Discover a world of possibilities at SSET's campus, where modern infrastructure meets academic excellence. Our facilities include state-of-the-art labs, libraries, sports complexes, and more, ensuring that students have access to everything they need to succeed.",
                    "Experience the convenience and comfort of SSET's infrastructure, designed to cater to the diverse needs of students and faculty. Our campus features modern buildings, well-equipped labs, libraries, sports facilities, and recreational areas, providing a conducive environment for learning and growth.",
                    "SSET's infrastructure is designed to enhance the learning experience and promote overall well-being. With modern facilities such as classrooms, labs, libraries, and recreational spaces, our campus provides students with the resources they need to excel academically and socially.",
                    "From classrooms to recreational areas, SSET's infrastructure is designed to facilitate learning, collaboration, and personal development. Our campus features modern facilities and amenities to ensure that students have a fulfilling college experience.",
                    "Explore the world-class infrastructure of SSET, where every facility is designed to inspire learning, creativity, and innovation. From advanced labs to spacious classrooms, our campus provides students with an environment conducive to academic excellence."
                ]
            },
            {
                "tag": "career_services",
                "patterns": [
                    "What career services does the college offer?",
                    "Can you tell me about the career guidance at SSET?",
                    "How does the college assist with career development?",
                    "Do you provide support for job placements?",
                    "Career services",
                    "Tell me about the placement assistance provided by SSET.",
                    "What resources are available for students seeking internships and jobs?",
                    "Career counseling",
                    "Placement support",
                    "How does the college prepare students for their careers?"
                ],
                "responses": [
                    "SSET offers comprehensive career services to help students navigate their professional journey. Our career guidance programs include resume building, interview preparation, job search assistance, and networking opportunities.",
                    "At SSET, we understand the importance of career development, which is why we provide robust career services to our students. From organizing placement drives to offering workshops and seminars on career planning, we are committed to helping students achieve their professional goals.",
                    "The college provides extensive support for career development through various initiatives such as career counseling, skill development workshops, and industry interactions. Our goal is to equip students with the necessary skills and knowledge to excel in their chosen fields.",
                    "Placement assistance is an integral part of our career services at SSET. We collaborate with leading companies to facilitate campus placements and internships for our students. Our dedicated placement cell provides guidance and support at every step of the recruitment process.",
                    "SSET's career services encompass a wide range of support mechanisms aimed at preparing students for successful careers. From organizing mock interviews to offering personality development sessions, we ensure that students are well-equipped to pursue their professional aspirations.",
                    "Our placement assistance program at SSET is designed to connect students with job opportunities in leading companies. Through campus recruitment drives, industry tie-ups, and career fairs, we strive to match students with the right career opportunities.",
                    "Career counseling is an integral part of our student support services at SSET. Our experienced counselors provide personalized guidance to help students explore career options, set goals, and make informed decisions about their future.",
                    "SSET's placement support services are tailored to meet the diverse needs of our students. Whether it's resume writing, interview skills, or job search strategies, we offer comprehensive assistance to ensure that students are well-prepared for their professional endeavors.",
                    "We offer a range of resources and services to support students in their career development journey. From industry-relevant training programs to networking events with alumni and industry professionals, we provide students with the tools they need to succeed in the job market.",
                    "Career preparation is a priority at SSET, and our career services team works tirelessly to provide students with the support they need to achieve their career goals. Through workshops, seminars, and one-on-one counseling sessions, we empower students to make informed decisions about their future."
                ]
            },
            {
                "tag": "career_resources",
                "patterns": [
                    "Where can I find career resources?",
                    "Are there any resources available for career planning?",
                    "How can I access career-related information?",
                    "Career guidance",
                    "Professional development",
                    "Job search assistance",
                    "Internship opportunities",
                    "career resources",
                    "Career workshops",
                    "Networking events",
                    "Industry collaborations"
                ],
                "responses": [
                    "SSET offers a wealth of career resources to support students in their professional journey. You can access career-related information through our career guidance center, online portals, and workshops conducted by industry experts.",
                    "Our career resources include job boards, internship databases, and career counseling services to assist students with career planning and development. Whether you're exploring job opportunities or seeking advice on career paths, we're here to help.",
                    "Students can access career-related information through our online platforms, career counseling sessions, and workshops organized by the college. We provide comprehensive support for professional development and job search strategies.",
                    "Our career guidance services provide students with valuable insights into various career paths, industry trends, and job market requirements. Whether you're a freshman or a senior, we offer personalized assistance to help you achieve your career goals.",
                    "Professional development is a key focus at SSET, and we offer a range of workshops, seminars, and training programs to enhance students' employability skills. From resume writing to interview techniques, we cover all aspects of career preparation.",
                    "SSET's job search assistance program connects students with internship and job opportunities in leading companies. Through our industry collaborations and placement drives, we help students secure valuable work experience and career opportunities.",
                    "Internship opportunities are an integral part of our career resources, providing students with hands-on experience in their field of study. We partner with industry leaders to offer internship programs that align with students' career interests and aspirations.",
                    "Our career workshops cover a wide range of topics, including resume building, networking skills, and interview preparation. These workshops are conducted by industry professionals and alumni to provide students with practical insights and tips for career success.",
                    "Networking events are a great way for students to connect with industry professionals, alumni, and potential employers. We organize networking events and industry collaborations to facilitate meaningful connections and career opportunities for our students.",
                    "Through our industry collaborations, students have access to real-world insights, mentorship opportunities, and potential job placements. These partnerships enable students to gain valuable industry experience and build professional networks for their future careers."
                ]
            },
            {
                "tag": "health_services",
                "patterns": [
                    "What health services are available on campus?",
                    "Can I see a doctor on campus?",
                    "Do you offer medical care for students?",
                    "Where can I get medical assistance?",
                    "health services",
                    "medical care on campus",
                    "Is there a nurse available for students?",
                    "How do I access healthcare on campus?",
                    "Are mental health services provided?",
                    "What kind of medical treatments are available?",
                    "healthcare",
                    "health"
                ],
                "responses": [
                    "Our campus health center provides a range of medical services for students, including general check-ups, vaccinations, and treatment for minor illnesses and injuries. Our qualified healthcare professionals are here to support your well-being.",
                    "Yes, students can access medical care on campus through our health center. Whether you need to see a doctor for a routine check-up or seek treatment for a health concern, our healthcare team is here to provide quality care.",
                    "We offer comprehensive medical care for students at our campus health center. From preventive care to acute illness management, our healthcare providers are dedicated to promoting the health and wellness of our student community.",
                    "If you require medical assistance, you can visit our campus health center for evaluation and treatment. Our medical staff is equipped to address a wide range of health concerns and provide personalized care to meet your needs.",
                    "Our health services include access to healthcare professionals, preventive care, treatment for minor illnesses and injuries, and referrals to specialists as needed. Whether you're feeling unwell or need routine care, our health center is here to support you.",
                    "The health and well-being of our students are a top priority. That's why we offer a variety of health services on campus, including medical consultations, immunizations, and health education programs.",
                    "Students can access a range of healthcare services at our campus health center, from routine medical exams to specialized treatments. Our goal is to provide convenient and comprehensive care to support student health and wellness.",
                    "Our health services are designed to meet the needs of our student population, offering timely access to medical professionals and resources for maintaining good health. Whether you need a check-up or treatment for an illness, we're here to help.",
                    "The campus health center provides a supportive environment for students to address their health concerns. From preventive screenings to counseling services, we offer a holistic approach to student wellness.",
                    "At our campus health center, students can receive personalized medical care from experienced professionals. We strive to promote a healthy campus community by offering accessible and high-quality health services."
                ]
            },
            {
                "tag": "sports",
                "patterns": [
                    "What sports facilities are available on campus?",
                    "Can I join a sports team?",
                    "Tell me about the sports programs at SSET.",
                    "Are there any fitness classes offered?",
                    "sports facilities",
                    "How can I get involved in sports?",
                    "Is there a gym on campus?",
                    "What intramural sports are available?",
                    "Tell me about the varsity teams.",
                    "sports"
                ],
                "responses": [
                    "Our campus boasts state-of-the-art sports facilities, including a gymnasium, outdoor fields, and courts for various sports. Whether you're a seasoned athlete or just looking to stay active, we have something for everyone.",
                    "Yes, students can join a variety of sports teams and clubs on campus. From soccer and basketball to volleyball and badminton, there are plenty of opportunities to compete and have fun.",
                    "SSET offers a wide range of sports programs to cater to students' interests and abilities. Whether you're interested in competitive sports or recreational activities, our programs provide opportunities for skill development, teamwork, and physical fitness.",
                    "We offer fitness classes and workshops for students interested in improving their health and wellness. From yoga and Pilates to cardio and strength training, there's something for every fitness level.",
                    "Our sports facilities include a fully-equipped gymnasium, outdoor fields for soccer and cricket, tennis and basketball courts, and a swimming pool. These facilities are available for students to use for recreational and competitive purposes.",
                    "Getting involved in sports is easy at SSET! You can join a sports team, participate in intramural leagues, or simply use our campus facilities for recreational activities. Whatever your interests, there's a way to stay active and healthy.",
                    "Yes, we have a well-equipped gym on campus that is open to all students. Whether you're into weightlifting, cardio, or group fitness classes, our gym has everything you need to reach your fitness goals.",
                    "Intramural sports are a great way to stay active and have fun with friends. We offer a variety of intramural leagues and tournaments throughout the year, allowing students to compete in their favorite sports and make lasting memories.",
                    "Our varsity teams compete in intercollegiate tournaments and championships, representing SSET with pride. Whether you're interested in basketball, soccer, or volleyball, our varsity programs offer opportunities for athletes to showcase their skills and compete at a high level.",
                    "At SSET, sports are an integral part of campus life. Whether you're a casual player or a serious competitor, there's a place for you in our vibrant sports community. Come join us and experience the thrill of competition and the camaraderie of teamwork!"
                ]
            },
            {
                "tag": "academic_advising",
                "patterns": [
                    "How can I get academic advice?",
                    "Tell me about academic advising services.",
                    "Can I meet with an academic advisor?",
                    "Where can I find help with course selection?",
                    "academic advising",
                    "Who can I talk to about my academic goals?",
                    "Is there support available for academic planning?",
                    "When should I schedule an advising appointment?",
                    "academic advisor",
                    "I need assistance with my academic plan.",
                    "academic advising"
                ],
                "responses": [
                    "Our academic advising services are designed to help students navigate their academic journey and make informed decisions about their courses and programs. You can schedule an appointment with an advisor to discuss your academic goals and get personalized guidance.",
                    "Academic advising is available to all students seeking guidance on course selection, degree requirements, and academic planning. Our advisors are here to support you throughout your academic career and help you achieve success.",
                    "Yes, students can meet with an academic advisor to discuss their academic goals, plan their course schedule, and address any concerns or questions they may have. Appointments can be scheduled through our advising office.",
                    "Our academic advising services provide assistance with course selection, major/minor declaration, degree planning, and academic policies. Whether you're a freshman or a senior, our advisors are here to help you make the most of your academic experience.",
                    "If you have questions or need assistance with your academic plan, our advising office is here to help. You can schedule an appointment to meet with an advisor and discuss your goals, interests, and concerns.",
                    "Our academic advisors are knowledgeable and experienced professionals who can provide guidance on course selection, degree requirements, academic policies, and more. Whether you're planning your schedule or exploring majors, our advisors are here to help you succeed.",
                    "For academic planning and advising support, students can schedule an appointment with an advisor through our advising office. Whether you're a new student or a returning one, our advisors are available to assist you with your academic goals.",
                    "If you're unsure about your course selection or need assistance with academic planning, we recommend scheduling an appointment with an advisor. Our advisors can help you create a personalized academic plan that aligns with your interests and goals.",
                    "Our academic advisors are dedicated to helping students succeed academically. Whether you need assistance with course selection, major exploration, or academic planning, our advisors are here to support you every step of the way.",
                    "If you're feeling overwhelmed or uncertain about your academic path, don't hesitate to reach out to our advising office for assistance. Our advisors are here to provide guidance, support, and resources to help you succeed academically."
                ]
            },
            {
                "tag": "campus_safety",
                "patterns": [
                    "What measures are in place for campus safety?",
                    "How safe is the campus?",
                    "Tell me about campus security.",
                    "Are there any safety protocols on campus?",
                    "What safety resources are available for students?",
                    "How does the college ensure the safety of students?",
                    "Can you provide information about emergency procedures?",
                    "What should I do in case of an emergency on campus?",
                    "Is there a campus police department?",
                    "Are there any safety tips for students?",
                    "campus safety"
                ],
                "responses": [
                    "Ensuring the safety and well-being of our students is a top priority. We have a dedicated campus security team that patrols the premises round the clock.",
                    "Our campus is equipped with state-of-the-art security systems and surveillance cameras to monitor activity and ensure a safe environment for all.",
                    "We have established safety protocols and emergency response plans in place to address various situations, including medical emergencies, fire incidents, and security threats.",
                    "In case of an emergency, students can contact campus security or dial the emergency hotline for immediate assistance. We conduct regular drills to familiarize students with emergency procedures.",
                    "Safety resources such as emergency call boxes, first aid stations, and safety escorts are available throughout the campus for students' convenience.",
                    "We encourage students to stay vigilant and report any suspicious activity or concerns to campus security. Your cooperation plays a crucial role in maintaining a safe campus environment.",
                    "Remember to familiarize yourself with campus safety protocols, keep emergency contact numbers handy, and stay informed about safety resources available to you.",
                    "If you ever feel unsafe on campus or encounter any security-related issues, don't hesitate to reach out to campus security or contact the college administration for assistance.",
                    "Our campus safety measures are designed to promote a secure learning environment where students can focus on their academic pursuits without worrying about their well-being.",
                    "Your safety is our priority, and we continuously strive to enhance campus safety measures to ensure a secure and supportive environment for all members of our community."
                ]
            },


            // Add more intents as needed
        ];

        // Find the appropriate intent
        const intent = intents.find(intent => intent.patterns.some(pattern => userMessage.toLowerCase().includes(pattern.toLowerCase())));

        // If intent is found, select a random response
        if (intent) {
            const randomResponse = intent.responses[Math.floor(Math.random() * intent.responses.length)];
            // Append bot response to chat body
            appendMessage('Chat Bot', randomResponse);
        } else {
            // Default response if intent is not found
            appendMessage('Chat Bot', "I'm sorry, I didn't understand that.");
        }
    }
});