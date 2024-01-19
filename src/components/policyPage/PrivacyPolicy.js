
import React from 'react';
import './PrivacyPolicy.css';
import privacyicon from '../../assets/img/privacyicon.jpg'

const PrivacyPolicy = () => {
    return (
        <div className="container">
            <br />
            <h1> Privacy Policy </h1>
            <div className='container-inner'>
                <img src={privacyicon} alt='privacyicon' />
                <div>
                    <h3>
                        Retention of Your Personal Data
                    </h3>
                    <p>
                        The company will retian your Personal data only for as long as is necessary for the purposes set out in the pirvacy policy. We will retian and use your Personal data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies. The company will also retain usage data for internal analysis purposes. Usage data is generally retained for a shorter period of time, except when this data is used to srengthen the security or to improve the functionally of our service, or we are legally obligated to retain this data for longer time periods.
                    </p>
                </div>
            </div>
            <div className='container-inner'>
                <img src={privacyicon} alt='privacyicon' />
                <div>
                    <h3>
                        Childern's Policy
                    </h3>
                    <p>
                        Our service does not address anyone under the age of 13. We dont knowingly collect personally identificable information from anyone under the age of 13. If you are a parent of guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from anyone under the age of 13 without verification of parental consent, we take steps to remove that information form our servers.
                    </p>
                </div>
            </div>
            <div className='container-inner'>
                <img src={privacyicon} alt='privacyicon' />
                <div>
                    <h3>
                        Changes To Other Policies 
                    </h3>
                    <p>
                        We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. We will let you know via email and / or a porminent notice on our service, prior to the change becoming effective and update the "Last Update" data at the top of this privacy policy. Youou are advised to review this privacy policy periodically for any changes. changes to this this privacy policy are effective when the are posted on this page.
                    </p>
                </div>
            </div>
            <br />

            
        </div>
    );
};

export default PrivacyPolicy;
