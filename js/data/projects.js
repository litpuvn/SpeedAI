/**
 * Team's Work (projects) data
 *
 * To add a new project, copy one block below and edit it:
 *   - id: unique, no spaces (e.g. 'proj-7')
 *   - title: shown on the card and modal header
 *   - image: path to the card image (put files in assets/images/projects/)
 *   - shortDesc: one-line summary on the card
 *   - fullContent: HTML for the modal body (the image is added automatically)
 */
window.PROJECTS = [
    {
        id: 'proj-1',
        title: 'Autonomous Vehicle Perception System',
        image: 'assets/images/projects/proj-1.jpg',
        shortDesc: 'Real-time object detection and tracking for autonomous navigation',
        fullContent: `
            <h3>Project Overview</h3>
            <p>This project develops a comprehensive perception system for autonomous vehicles, combining LiDAR, radar, and camera data fusion for robust object detection and tracking in diverse weather conditions.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Multi-sensor fusion using Kalman filtering and deep learning</li>
                <li>Real-time processing on embedded NVIDIA Orin platform</li>
                <li>Adverse weather simulation and testing framework</li>
                <li>Integration with ROS 2 and Autoware.Auto stack</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Mehmed Kantardzic (PI), 3 PhD students, 2 MS students, industry partner: Ford Motor Company</p>
            <h3>Status</h3>
            <p>Phase 2: Field testing on Louisville test track. Targeting SAE Level 4 demonstration by Q4 2026.</p>
            <h3>Funding</h3>
            <p>NSF CPS Grant ($1.2M), Ford Motor Company ($400K), KY EPSCoR ($150K)</p>
        `
    },
    {
        id: 'proj-2',
        title: 'AI-Powered Cybersecurity Threat Detection',
        image: 'assets/images/projects/proj-2.jpg',
        shortDesc: 'Machine learning models for real-time network anomaly detection',
        fullContent: `
            <h3>Project Overview</h3>
            <p>Development of novel machine learning algorithms for detecting zero-day attacks and advanced persistent threats in enterprise networks using unsupervised and semi-supervised learning techniques.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Graph neural networks for modeling network behavior</li>
                <li>Federated learning for privacy-preserving threat intelligence sharing</li>
                <li>Explainable AI for analyst-friendly alert triage</li>
                <li>Integration with SIEM platforms (Splunk, Elastic)</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Adel Elmaghraby (PI), 4 PhD students, collaboration with UofL Digital Transformation Center</p>
            <h3>Status</h3>
            <p>Deployed in pilot at two healthcare systems. 94% detection rate for novel threats with &lt;1% false positive rate.</p>
            <h3>Publications</h3>
            <p>3 papers at IEEE S&P 2025, 2 at USENIX Security 2024</p>
        `
    },
    {
        id: 'proj-3',
        title: 'Smart Manufacturing Digital Twin Platform',
        image: 'assets/images/projects/proj-3.jpg',
        shortDesc: 'Real-time digital twin for predictive maintenance and optimization',
        fullContent: `
            <h3>Project Overview</h3>
            <p>Creation of a scalable digital twin platform for discrete manufacturing, enabling real-time monitoring, predictive maintenance, and production optimization through physics-informed machine learning.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Physics-informed neural networks for equipment modeling</li>
                <li>Edge computing architecture for low-latency inference</li>
                <li>OPC-UA and MQTT integration with existing PLC/SCADA</li>
                <li>AR/VR interface for operator visualization</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Xiaoyu Liu (PI), Dr. Dan Popa (Co-PI), 2 PhD students, 4 undergraduate researchers</p>
            <h3>Partners</h3>
            <p>GE Appliances, Raytheon, Kentucky Manufacturing Extension Partnership</p>
            <h3>Status</h3>
            <p>Pilot deployment at GE Appliances Louisville facility. 23% reduction in unplanned downtime achieved.</p>
        `
    },
    {
        id: 'proj-4',
        title: 'Quantum-Resistant Cryptography for IoT',
        image: 'assets/images/projects/proj-4.jpg',
        shortDesc: 'Lightweight post-quantum cryptographic primitives for constrained devices',
        fullContent: `
            <h3>Project Overview</h3>
            <p>Research and implementation of NIST-standardized post-quantum cryptographic algorithms optimized for resource-constrained IoT devices, ensuring long-term security for critical infrastructure.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Optimized implementations of CRYSTALS-Kyber and CRYSTALS-Dilithium</li>
                <li>Hardware acceleration on RISC-V and ARM Cortex-M platforms</li>
                <li>Side-channel resistant implementations</li>
                <li>Formal verification using EasyCrypt</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Mahmoud El-Gayyar (PI), 2 PhD students, NIST PQC migration project collaboration</p>
            <h3>Status</h3>
            <p>Reference implementation submitted to NIST. Open-source library released under Apache 2.0.</p>
            <h3>Impact</h3>
            <p>Adopted by 3 major IoT platform vendors. Contributing to IETF standards for PQC in constrained environments.</p>
        `
    },
    {
        id: 'proj-5',
        title: 'Accessible Computing Education Platform',
        image: 'assets/images/projects/proj-5.jpg',
        shortDesc: 'Inclusive learning platform for neurodiverse computer science students',
        fullContent: `
            <h3>Project Overview</h3>
            <p>Design and evaluation of an adaptive learning platform that personalizes computer science education for students with diverse learning needs, including ADHD, autism spectrum, and dyslexia.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Multimodal content delivery (visual, auditory, kinesthetic)</li>
                <li>Adaptive pacing and scaffolding based on learning analytics</li>
                <li>Gamified progress tracking with customizable reward systems</li>
                <li>Integration with Canvas LMS and VS Code</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Olfa Nasraoui (PI), Dr. Marie Brown (Education), 3 PhD students, UofL Disability Resource Center</p>
            <h3>Status</h3>
            <p>IRB-approved user study with 120 students underway. Preliminary results show 34% improvement in completion rates.</p>
            <h3>Funding</h3>
            <p>NSF IUSE Grant ($800K), Google Award for Inclusion Research ($150K)</p>
        `
    },
    {
        id: 'proj-6',
        title: 'Federated Learning for Healthcare Analytics',
        image: 'assets/images/projects/proj-6.jpg',
        shortDesc: 'Privacy-preserving ML across hospital networks without data sharing',
        fullContent: `
            <h3>Project Overview</h3>
            <p>Development of a federated learning framework enabling collaborative machine learning across multiple healthcare institutions while maintaining patient data privacy and HIPAA compliance.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Secure aggregation protocols with differential privacy</li>
                <li>Heterogeneous data handling (different EHR systems)</li>
                <li>Model personalization for local hospital populations</li>
                <li>Audit trails and regulatory compliance reporting</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Hichem Frigui (PI), Dr. Olfa Nasraoui (Co-PI), 3 PhD students, UofL Health, Norton Healthcare</p>
            <h3>Status</h3>
            <p>Deployed across 4 hospital systems in Kentucky. Predicting sepsis 6 hours earlier than standard protocols.</p>
            <h3>Publications</h3>
            <p>Nature Digital Medicine (2024), AMIA Annual Symposium (2024, 2025)</p>
        `
    },
    {
        id: 'proj-7',
        title: 'Edge AI for Precision Agriculture',
        image: 'assets/images/projects/proj-7.jpg',
        shortDesc: 'Low-power ML models for on-device crop health monitoring',
        fullContent: `
            <h3>Project Overview</h3>
            <p>Development of energy-efficient machine learning models that run on edge devices in the field to detect crop disease, estimate irrigation needs, and guide variable-rate fertilization.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Model compression and quantization for ARM Cortex-M and RISC-V</li>
                <li>Drone and ground-sensor image pipelines for canopy analysis</li>
                <li>Federated updates from distributed farms without raw data sharing</li>
                <li>Solar-powered sensor node design with LoRaWAN connectivity</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Xiaoyu Liu (PI), 2 PhD students, University of Kentucky cooperative extension partner</p>
            <h3>Status</h3>
            <p>Field trials on 3 Kentucky farms during the 2026 growing season. Disease detection accuracy of 91% at under 2mW inference power.</p>
            <h3>Funding</h3>
            <p>USDA NIFA Grant ($650K), Kentucky Corn Growers Association ($75K)</p>
        `
    },
    {
        id: 'proj-8',
        title: 'NLP for Legal Document Analysis',
        image: 'assets/images/projects/proj-8.jpg',
        shortDesc: 'Large language model tools for contract review and discovery',
        fullContent: `
            <h3>Project Overview</h3>
            <p>Creation of a retrieval-augmented generation system that helps legal aid organizations review contracts, extract obligations, and search large document collections with citations.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Fine-tuned open-weight LLMs with retrieval-augmented generation</li>
                <li>Legal citation grounding and hallucination detection</li>
                <li>Document layout parsing for scanned court filings</li>
                <li>Human-in-the-loop review interface with confidence scores</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Olfa Nasraoui (PI), 3 PhD students, UofL Brandeis School of Law clinic</p>
            <h3>Status</h3>
            <p>Pilot with two legal aid clinics. Review time for pro-bono contracts reduced by 60% in blind evaluation.</p>
            <h3>Publications</h3>
            <p>ACL Findings (2025), NAACL Industry Track (2025)</p>
        `
    },
    {
        id: 'proj-9',
        title: 'Digital Pathology Image Segmentation',
        image: 'assets/images/projects/proj-9.jpg',
        shortDesc: 'AI-assisted tumor detection in whole-slide pathology images',
        fullContent: `
            <h3>Project Overview</h3>
            <p>Development of segmentation models that highlight regions of interest in whole-slide pathology images, supporting faster and more consistent diagnosis by pathologists.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Multi-scale transformer architectures for gigapixel slides</li>
                <li>Weakly supervised learning from annotated slide regions</li>
                <li>Uncertainty maps to flag cases for second review</li>
                <li>HL7/FHIR integration for clinical workflow deployment</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Hichem Frigui (PI), 2 PhD students, UofL Health Department of Pathology</p>
            <h3>Status</h3>
            <p>Validated on 4,200 slides; sensitivity of 96% for metastatic breast cancer detection, FDA breakthrough device designation pending.</p>
            <h3>Funding</h3>
            <p>NIH R01 ($1.1M), Kentucky Cabinet for Health and Family Services ($120K)</p>
        `
    },
    {
        id: 'proj-10',
        title: 'Blockchain Supply Chain Provenance',
        image: 'assets/images/projects/proj-10.jpg',
        shortDesc: 'Tamper-evident tracking for pharmaceutical distribution',
        fullContent: `
            <h3>Project Overview</h3>
            <p>A permissioned ledger system that records pharmaceutical shipments end-to-end, enabling rapid counterfeit detection and recall coordination across distributors.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Hyperledger Fabric network with privacy channels for competitors</li>
                <li>Lightweight IoT gateway attestation for cold-chain sensors</li>
                <li>Zero-knowledge proofs for confidential pricing data</li>
                <li>Smart contract rules enforcing DSCSA compliance workflows</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Mahmoud El-Gayyar (PI), 2 PhD students, 2 industry partners in regional distribution</p>
            <h3>Status</h3>
            <p>Live pilot tracking 15,000 shipments per month. Recall response time reduced from days to minutes.</p>
            <h3>Impact</h3>
            <p>Informing ANSI-standardized interoperability guidelines for healthcare supply chains.</p>
        `
    },
    {
        id: 'proj-11',
        title: 'Intelligent Tutoring System for STEM',
        image: 'assets/images/projects/proj-11.jpg',
        shortDesc: 'Adaptive feedback for introductory programming courses',
        fullContent: `
            <h3>Project Overview</h3>
            <p>An intelligent tutoring platform that analyzes student code and problem-solving steps in real time, delivering personalized hints without revealing final solutions.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Static analysis plus LLM-based misconception detection</li>
                <li>Knowledge tracing models predicting skill mastery</li>
                <li>Hint escalation strategies grounded in learning science</li>
                <li>Instructor dashboards highlighting class-wide difficulties</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Adel Elmaghraby (PI), 3 PhD students, UofL Center for Teaching &amp; Learning</p>
            <h3>Status</h3>
            <p>Deployed in CS 210 and CS 302. Course DFW rates dropped by 21% over two semesters.</p>
            <h3>Funding</h3>
            <p>NSF IUSE ($720K), Microsoft Research Gift ($50K)</p>
        `
    },
    {
        id: 'proj-12',
        title: 'Disaster Response Drone Swarm Coordination',
        image: 'assets/images/projects/proj-12.jpg',
        shortDesc: 'Cooperative aerial robots for search and damage assessment',
        fullContent: `
            <h3>Project Overview</h3>
            <p>Algorithms and systems for coordinating teams of drones after natural disasters to map damage, locate survivors, and maintain communication with ground crews.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Distributed task allocation without central control</li>
                <li>Mesh radio networking resilient to infrastructure loss</li>
                <li>Onboard thermal and visual detection of survivors</li>
                <li>Simulation-to-reality transfer in Gazebo and hardware fleet</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Dan Popa (PI), Dr. Mehmed Kantardzic (Co-PI), 4 PhD students, Louisville Metro Emergency Management</p>
            <h3>Status</h3>
            <p>Demonstrated 12-drone coordinated mapping exercise in March 2026. Preparing for FEMA resiliency competition.</p>
            <h3>Funding</h3>
            <p>NSF CNS ($950K), KY EPSCoR ($180K)</p>
        `
    }
];
