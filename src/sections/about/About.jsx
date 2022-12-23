import AboutImage from '../../assets/self2.jpg'
import Resume from '../../assets/updatedresume.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                 Learning how to code has been one of the best decision I've made as an adult, bringing ideas to life and looking at a finished product brings a sense of accomplishment.
                </p>
                <p>
                Hi, my name is Gurprem Bhullar I am from Norwalk CT, I graduated from Sacred Heart University in Fairfield, CT with a Masters in Computer Science and 
                a Ceritificate in Full Stack Development
                </p>
                <a href={Resume} download className='btn primary'>Download Resume <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About