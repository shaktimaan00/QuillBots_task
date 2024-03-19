import { Divider, Button, Link } from '@nextui-org/react'
import "./style.css"

const Section2 = () => {
  return (
    <div className='section2-container'>
        <div className='section2-comp'>
            <div className='comp-left'>
                <h1 className='heading comp-left-heading'>Before QuillAudits</h1>
                <p className='compl-cont1'>Exploits like reentrancy and front-running can let attackers withdraw extra funds and manipulate transaction timing for unfair gains</p>
                <p className='compl-cont2'>Vulnerabilities could allow users to mint CDP tokens or pension shares indefinitely, disrupting the systems economic balance.</p>
            </div>
            <div className="divider"></div>
            <div className='comp-right'>
                <h1 className='heading comp-right-heading'>After QuillAudits</h1>
                <p className='compr-cont1'>Implementation of reentrancy protection mechanisms.</p>
                <p className='compr-cont2'>Ensure precision in decimal handling with standard libraries, recalculate accurately, fix logic errors, and secure referral systems against exploitation.</p>
            </div>
        </div>
        <div className='section2-down'>
            <div className='section2-heading'>
                <p>See how QuillAudits is a trusted partner in</p>
                <p>1000+ Audit stories</p>
            </div>
            <Button as={Link} color="primary" href="#" variant="flat" className="button">
                Request an Audit
            </Button>
        </div>
    </div>
  )
}

export default Section2;