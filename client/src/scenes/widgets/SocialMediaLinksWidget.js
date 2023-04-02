import React from 'react';
import WidgetWrapper from 'components/WidgetWrapper';
import SocialProfile from 'components/SocialProfile';

const SocialMediaLinksWidget = ({ twitterLink, linkedinLink }) => {
  return (
    <WidgetWrapper>
      <SocialProfile
        name="Twitter"
        url={twitterLink}
        imageSrc="../assets/twitter.png"
        description="Social Network"
      />
      <SocialProfile
        name="LinkedIn"
        url={linkedinLink}
        imageSrc="../assets/linkedin.png"
        description="Social Network"
      />
    </WidgetWrapper>
  );
};

export default SocialMediaLinksWidget;
