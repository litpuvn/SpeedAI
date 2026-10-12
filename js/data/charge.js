/**
 * Standing Committee Charge data
 *
 * Rendered at the top of the page in the "Committee Charge" tab.
 * Each object in `items` is one numbered point:
 *   - lead:  bold intro sentence, followed by sub-items (a, b, c, ...)
 *   - subItems: array of strings shown as lettered sub-points
 * A point with `note` instead of `lead`/`subItems` is shown as a
 * muted call-out box (used for the "outside the scope" statement).
 */
window.COMMITTEE_CHARGE = {
    title: 'Standing Committee Charge',
    items: [
        {
            lead: 'This Committee will take responsibility for gathering current information on:',
            subItems: [
                'Recent developments and emerging research on AI-based tools (including Generative AI), particularly those that are accessible to both students and instructors.',
                'Industry (via IABs) needs for, uses of, and policies regarding AI tools in the workplace.',
                'Industry/professional group recommendations and policies on AI.',
                'Policies and implementations at benchmark institutions and other units within the University.'
            ]
        },
        {
            lead: 'This Committee will support Faculty by reviewing and synthesizing information, and providing recommendations on:',
            subItems: [
                'Appropriate incorporation of AI-based tools within Speed courses; including use by students, and use by instructor for instructional purposes.',
                'Development of additional courses and/or credentials related to AI-based tools.',
                'Updates to school policies as they relate to ethical usage of AI tools by students, Academic Dishonesty (ie: recommendations on dishonesty based on AI-tool usage) and policies related to course instruction.',
                'Syllabus statements on AI use.',
                'Instructor training to (1) improve AI literacy amongst the faculty, (2) share knowledge regarding the use of AI tools to reduce instructor workload burden without compromising quality of instruction, (3) encourage and support use of AI in classes where appropriate, and (4) understand appropriate class policies regarding student use of AI tools.',
                'Policies related to appropriate usage of AI tools in teaching and evaluation of teaching.'
            ]
        },
        {
            note: 'Policies and recommendations related to AI use (including Generative AI) in research applications (including Education Research) is outside the scope of this Committee.'
        }
    ]
};
