import Link from 'next/link'

const CaseStudiesCta = () => {
    return (
        <section className='ai_cta case-cta'>
            <div className='container'>
                <div className='text-center'>
                    <h2>Have project in mind?</h2>
                    <p>Let&apos;s build something amazing.</p>
                    <Link href={"/start-a-project"}>Start a Project →</Link>
                </div>
            </div>
        </section>
    )
}

export default CaseStudiesCta
