import Link from "next/link";
import "./style.css"
import Image from "next/image";

const Section3 = () => {
  return (
    <div className="section3-container">
        <div className="section3-left">
            <p className="section3-p1">Carpe Diem Pension, on Pulse blockchain, redefines retirement with a self-managed, inclusive, globally portable fund. Unique for its token burn mechanism, it ensures a sustainable 4.32% inflation payout. With $143.11k and 41.06% of CDP already burned, it serves 35 users globally.</p>
            <p className="section3-p2">CarpeDiem Pension Flexible, Blockchain-Enabled Future</p>
            <p className="section3-p3">CarpeDiem Pension redefines retirement planning with a unique approach that deviates from traditional pension funds. With no minimum age for retirement, it offers flexibility and freedom, ensuring all genders receive equal treatment. CarpeDiem Pension ensures blockchain transparency, anonymity, and global accessibility, safeguarding pensions during international relocation. Easily transfer pensions to loved ones; share wallet access. Re-deposit payouts for increased future benefits. Importantly, CarpeDiem Pension prioritizes deposit security by avoiding utilizing client funds for internal investments. To become a part of this forward-thinking pension scheme, one simply needs to install and configure a blockchain wallet.</p>
            <Image src={"/image5.svg"} className="section3-img5" height={10} width={10} alt="image5" />
            <h1 className="section3-p4">CarpeDiem Pension Challenges: Enhancing Security Against Reentrancy, Front-Running, and Infinite Minting</h1>
            <p className="section3-p5">CarpeDiem Pension confronts critical security challenges, including the risks of reentrancy and front-running exploits. Malicious actors may exploit contract vulnerabilities, withdrawing excess funds or manipulating transaction timing for unfair advantages. System faces infinite minting threats, risking economic stability with endless creation of CDP tokens or pension shares. Addressing these challenges is paramount to safeguarding the integrity and security of CarpeDiem Pension.</p>
            <Image src={"/image6.svg"} className="section3-img6" height={10} width={10} alt="image6" />
            <h1 className="section3-p6">CarpeDiem Pensions Journey Through our Audit Process</h1>

            <ol className="section3-olist1">
                <li>
                    <h1>Information Gathering</h1>
                    <ol className="section3-olist2">
                        <li>Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents.</li>
                        <li>Obtained a clear understanding of the CDP platforms functionality, economic model, and intended user interactions.</li>
                        <li>Discussed client concerns and specific areas of focus for the audit.</li>
                    </ol>
                </li>
                <li>
                    <h1>Manual Code Review:</h1>
                    <ol className="section3-olist2">
                        <li>
                            <h1>Conducted a line-by-line review of the smart contract code, focusing on:</h1>
                            <ol className="section3-olist3">
                                <li>
                                    <h1><b><i>Vulnerability identification: </i></b> Searching for known vulnerabilities like reentrancy, front-running, integer overflows, and access control issues etc.</h1>
                                </li>
                                <li>
                                    <h1><b><i>Logic flaws: </i></b> Identifying inconsistencies or unintended behaviors in the code logic.</h1>
                                </li>
                                <li>
                                    <h1><b><i>Tokenomics correctness: </i></b>Verifying if the code accurately implements the intended economic model and token distribution mechanisms.</h1>
                                </li>
                                <li>
                                    <h1><b><i>Solidity best practices: </i></b>Compliance with secure coding standards and adherence to established guidelines.</h1>
                                </li>
                            </ol>
                        </li>

                    </ol>
                </li>
                <li>
                    <h1>Functional Testing: </h1>
                    <ol className="section3-olist2">
                        <li>Developed and executed a comprehensive set of test cases covering various user interactions and edge cases.</li>
                        <li>Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits.</li>
                        <li>Focused on scenarios identified during the manual review and client concerns (e.g., infinite minting, reward calculation errors).</li>
                        <li>Leveraged tools like Hardhat and Ganache to deploy and test the smart contract locally.</li>
                    </ol>
                </li>
                <li>
                    <h1>Automated Testing:</h1>
                    <ol className="section3-olist2">
                        <li>Employed static analysis tools like Slither to identify vulnerabilities through automated code scanning.</li>
                        <li>Utilized symbolic execution tools like Mythril to explore various code execution paths and uncover potential attack vectors.</li>
                        <li>Integrated unit tests are written by the CDP team to verify specific contract functions and their behaviour.</li>
                    </ol>
                </li>
                <li>
                    <h1>Reporting & Remediation:</h1>
                    <ol className="section3-olist2">
                        <li>Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact.</li>
                        <li>Provided clear recommendations for fixing each vulnerability, including code snippets and best practices.</li>
                        <li>Collaborated with the CDP team to prioritize and address the identified issues.</li>
                        <li>Conducted additional verification testing after vulnerability fixes were implemented.</li>
                    </ol>
                </li>
            </ol>
            <h1 className="section3-p7">QuillAudits Strategic Approach to CDP Security Audits</h1>
            <p className="section3-p5">Throughout the audit process, we unearthed a total of 33 issues, spanning from minor concerns to critical vulnerabilities. Among these, some of the critical issues identified were: Heres how we remediated them :</p>

            <ol className="section3-olist4">
                <li>
                    <h1>Unauthorized Claim/Compound:</h1>
                    <ol className="section3-olist2">
                        <li>Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time.</li>
                    </ol>
                </li>
                <li>
                    <h1>Precision Loss in mintCDP():</h1>
                    <ol className="section3-olist2">
                        <li>Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function.</li>
                    </ol>
                </li>
                <li>
                    <h1>Multiplication Accuracy:</h1>
                    <ol className="section3-olist2">
                        <li>Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations.</li>
                    </ol>
                </li>
                <li>
                    <h1>Incorrect Share Allocation:</h1>
                    <ol className="section3-olist2">
                        <li>The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources.</li>
                    </ol>
                </li>
                <li>
                    <h1>Logic Error in Referral Handling:</h1>
                    <ol className="section3-olist2">
                        <li>A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system</li>
                    </ol>
                </li>
                <li>
                    <h1>Referral Exploitation:</h1>
                    <ol className="section3-olist2">
                        <li>Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity.</li>
                    </ol>
                </li>
            </ol>

            <h1 className="section3-p4">Remediation & Impact:</h1>
            <p className="section3-p5">All identified vulnerabilities were addressed by the CDP team, significantly enhancing the smart contracts security posture. Key improvements include</p>

            <ol className="section3-olist2">
                <li>Implementation of reentrancy protection mechanisms.</li>
                <li>Accurate handling of decimal values using established libraries or best practices.</li>
                <li>Revised calculations with proper scaling factors</li>
                <li>Fixing logic errors to ensure deposits and waiting periods are enforced.</li>
                <li>Addressing referral system vulnerabilities to prevent abuse.</li>
            </ol>

            <p className="section3-p5"><b>Embed this tweet :- </b><Link className="section3-p9" href="https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20"> https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20</Link></p>

            <p className="section3-p5">CDP smart contract audit revealed and fixed critical vulnerabilities, safeguarding funds and ensuring platform stability. This underscores the need for proactive security in blockchain projects, crucial for financial asset management. Through audits and issue resolution, CDP reinforces platform security, bolstering user trust.</p>

            <Image src={"/image7.svg"}  height={10} width={10} className="section3-img7" alt="img7"  />

        </div>
        <div className="section3-right">
            <Image src={"/image4.svg"} height={200} width={200} alt="section3-image" className="section3-img" />
        </div>
    </div>
  )
}

export default Section3;