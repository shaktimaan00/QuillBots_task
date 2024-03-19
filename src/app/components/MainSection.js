import Image from "next/image";

const MainSection = () => {
  return (

    // <div className="section1-parent">
        <div className="section1-children">
            <div className="section1-gchild">
                <div className='section1-left'>
                    {/* <div> */}
                        <Image src={"/hero-img.png"} className="section1-img" width={1000} height={500} alt="image"/>
                        <div className="section1-absimg"><Image src={"/image2.svg"} className="insideimg" width={20} height={20}  /></div>
                    {/* </div> */}
                    
                </div>
                <div className='section1-right'>
                    <h1 className="section1-heading">Securing Trust : Boosting Security and Strengthening Trust at Carpe Diem Pension</h1>
                    <p className="section1-p">QuillAudits enhances Carpe Diem Pension by addressing 33 vulnerabilities on the Pulse blockchain, boosting security and user trust in digital pensions.</p>
                </div>
            </div>
            <div>
                <Image src={"/image3.svg"} height={20} width={200} className="section1-img3" alt="image" />
            </div>
        </div>
    // </div>
  )
}

export default MainSection;