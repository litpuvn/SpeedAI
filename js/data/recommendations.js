/**
 * Recommendations data
 *
 * To add a new recommendation, copy one block below and edit it:
 *   - id: unique, no spaces (e.g. 'rec-5')
 *   - title: shown in the list
 *   - content: HTML shown when the item is expanded
 */
window.RECOMMENDATIONS = [
    {
        id: 'rec-1',
        title: 'Recommendation on AI usage statement in syllabus',
        content: `
            <h3>Option 1 Alternative:</h3>
            <p>"Using AI-tools to help you complete any assignment is not permitted in this course."</p>
            
            <h3>Option 2 Alternative (recommend including both sections):</h3>
            <b>Policy for Use of AI tools:</b>
            <p>"In this course, AI tools (including Generative AI) are permitted for use in ways that support learning. Specifically, students are permitted to ask AI tools conceptual questions about the course topics and review individual work after it is completed. Whenever AI tools are used, the tool and the way it was used should be cited transparently in any work that is submitted.
AI tools are not permitted to be used in ways that reduce learning. Specifically, having an AI tool complete work that is supposed to be done individually is not permitted.
Instruction on appropriate uses of AI tools is integrated into this course, and students should follow assignment instructions carefully to ensure they follow this policy. Approved use of AI tools may vary from assignment to assignment."
            </p>

            <b>Academic Integrity:</b>
            <p>"Students are encouraged to work together and learn from each other. However, cheating in any form will not be tolerated. Though you may seek help from peers and other resources on homework, you must complete and submit your own work. You should not share completed homework assignments with other students, and you should not copy directly from someone else (another student or online resources, including AI tools). If you are concerned about a deadline or doing well on an assignment, please speak with your instructor rather than considering academic misconduct."
            </p>

            <h3>Option 3 Alternative:</h3>
            <p>"The use of AI tools (including Generative AI) will be allowed broadly throughout this course. However, students are required to declare or cite the use of AI tools in helping complete assignments and exams."</p>
        `
    },
    {
        id: 'rec-2',
        title: 'Recommendation on AI tools usage and data policy',
        content: `
            <h3>Overview</h3>
            <p>In an effort to maintain and advance our technological competence, the Speed School AI in Education committee recommends that Deans and Department Chairs encourage faculty to explore and learn about AI through research, personal study, Delphi offerings, and other relevant opportunities to support teaching and learning. This encouragement could include allocated time in faculty’s annual workplan, funding for professional development, investment in appropriate tools, etc.</p>
            <br/>
            <p>The Speed School AI in Education committee recommends the following AI-related policies be adopted by the Speed School of Engineering:</p>
            <h3>Key Points</h3>
            <ul>
                <li>While conducting any work with AI tools that includes student data<sup>1</sup>, employees may only use University-approved AI tools (or approved systems with embedded AI tools). While using university-approved AI tools with student data, faculty must use their UofL credentials.
<br/>
<sup>1</sup> Student data includes student names, ID numbers, certain demographic information, non-deidentified course work, grades, schedules, and enrollment information. These data are protected by both federal and state laws prohibiting exposure to non-university approved systems (FERPA, KRS 61.931–61.934, and KCDPA at KRS 367.3611–367.3629). A full listing of all sensitive data can be found within the University of Louisville Policy for Data Regulation and Management.</li>
                <li>For all professional duties in which employees use AI tools without student data, it is recommended that employees use University-approved AI tools (or approved systems with embedded AI tools) with their official UofL credentials.</li>
                <li>As with all cloud computing services, employees must follow existing IT policies when interacting with non-contracted AI tools.</li>
            </ul>
        `
    }
];
