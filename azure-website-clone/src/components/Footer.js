import React from 'react'
import iconazure from '../assets/azureicon.svg'
import twitter from '../assets/twitter.svg'
import inst from '../assets/insticon.svg'
import linked from '../assets/linkedicon.svg'
import angle from '../assets/angle-down.png'
import './Footer.css'

 function Footer() {
  return (
    <div>

    <div class="azure-footer-mob">
        <div class="azure-icon">
            <div class="icon-text-mob"><img src={iconazure} alt=""/><a href="">Get the Azure mobile app</a>
            </div>
            <div class="icons-social">
                <li><img src={twitter} alt=""/></li>
                <li><img src={inst} alt=""/></li>
                <li><img src={linked} alt=""/></li>
            </div>
        </div>
        <div class="explore-mob">
            <div class="exploremob">
                <div><b>Explore Azure</b>
                    <ul class="know-more-details">
                        <li>What is Azure?</li>
                        <li>Get Started</li>
                        <li>Global Infrastructure</li>
                        <li>Datacentre regions</li>
                        <li>Trust your cloud</li>
                        <li>Customer enablement</li>
                        <li>Customer stories</li>
                    </ul>
                </div>
                <div class="know-more-mob">+</div>
            </div>
            <div class="exploremob">
                <div><b>Products and pricing</b>
                    <ul class="know-more-details">
                        <li>Products</li>
                        <li>Pricing</li>
                        <li>Free Azure services</li>
                        <li>Flexible purchase options</li>
                        <li>Cloud economics</li>
                        <li>Optimise your costs</li>
                    </ul>
                </div>
                <div class="know-more-mob">+</div>
            </div>
            <div class="exploremob">
                <div><b>Solutions and suppport</b>
                    <ul class="know-more-details">
                        <li>Solutions</li>
                        <li>Resourses for accelerating growth</li>
                        <li>Solution architectures</li>
                        <li>Support</li>
                        <li>Azure demo live Q&A</li>
                    </ul>
                </div>
                <div class="know-more-mob">+</div>
            </div>
            <div class="exploremob">
                <div><b>Partners</b>
                    <ul class="know-more-details">
                        <li>Azure Marketplace</li>
                        <li>Find a partner</li>
                        <li>Technology partners</li>
                    </ul>
                </div>
                <div class="know-more-mob">+</div>
            </div>
            <div class="exploremob">
                <div><b>Resources</b>
                    <ul class="know-more-details">
                        <li>Training and certifications</li>
                        <li>Documentation</li>
                        <li>Updates</li>
                        <li>Blog</li>
                        <li>Developer Resources</li>
                        <li>Students</li>
                        <li>Events and webinars</li>
                        <li>Analyst reports, white papers and e-books</li>
                        <li>Videos</li>
                    </ul>
                </div>
                <div class="know-more-mob">+</div>
            </div>
            <div class="exploremob">
                <div><b>Cloud computing</b>
                    <ul class="know-more-details">
                        <li>What is machine learning?</li>
                        <li>What is cloud?</li>
                        <li>What is Big Data Analytics?</li>
                        <li>What is PaaS?</li>
                        <li>What is container?</li>
                        <li>What is DevOps?</li>
                    </ul>
                </div>
                <div class="know-more-mob">+</div>
            </div>
        </div>
        <div class="info-mob">
            <div class="place-mob">
                <p>Change language</p>
                <input type="text" placeholder="English(India)"/>
                <img src={angle} alt=''/>
            </div>
            <div class="lists-mob-footer">
                <li>Diversity and Inclusion</li>
                <li>Accessibility</li>
                <li>Privacy & Cookies</li>
                <li>Data Protection Notice</li>
                <li>Trademarks</li>
                <li>Terms of use</li>
                <li>Privacy Data Management</li>
                <li>Contact us</li>
                <li>Feedback</li>
                <li>Sitemap</li>
                <li><b>&copy; Microsoft 2023</b></li>
            </div>
        </div>
    </div>

    </div>
  )
}
export default Footer;
