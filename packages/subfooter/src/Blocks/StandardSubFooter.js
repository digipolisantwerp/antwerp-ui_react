import React from 'react';
import ContentBlock from './ContentBlock';
import NavBlock from './NavBlock';
import ButtonBlock from './ButtonBlock';
import SocialBlock from './SocialBlock';
import Icon from '../../../icon/src/Icon';
import {Environment} from '../../../environment';

const AstadSubFooter = () => {
	return (
		<React.Fragment>
			<ContentBlock xs={12} sm={4} md={4}>
				<NavBlock title="Snel zelf regelen">
					<li><a title="Vraag een document aan" href={`${Environment.getEloketUrl()}/nl/eloket/overzicht`}>Documenten aanvragen <Icon name="chevron-right" /></a></li>
					<li><a title="Meld een sluikstort" href={`${Environment.getEloketUrl()}/nl/eloket/sluikstort`}>Sluikstort melden <Icon name="chevron-right" /></a></li>
					<li><a title="Geef een adreswijziging door" href={`${Environment.getEloketUrl()}/nl/eloket/aangifte-adreswijziging-nieuw`}>Adreswijziging doorgeven <Icon name="chevron-right" /></a></li>
					<li><a title="Regel een parkeerverbod" href={`${Environment.getEloketUrl()}/nl/e-loket/parkeerverbod`}>Parkeerverbod aanvragen <Icon name="chevron-right" /></a></li>
				</NavBlock>
			</ContentBlock>
			<ContentBlock xs={12} sm={4} md={4}>
				<NavBlock title="Dienstverlening">
					<li><a title="Naar het e-loket" href={`${Environment.getEloketUrl()}/nl/eloket/overzicht/`}>E-loket <Icon name="chevron-right" /></a></li>
					<li><a title="Maak een afspraak" href={`${Environment.getEloketUrl()}/nl/e-loket/afspraak-maken`}>Afspraak <Icon name="chevron-right" /></a></li>
					<li><a title="Maak een melding" href={`${Environment.getEloketUrl()}/nl/melden`}>Melding maken <Icon name="chevron-right" /></a></li>
					<li><a title="Naar openingsuren" href={`${Environment.getAstadUrl()}/nl/overzicht/adressen-en-openingsuren/stadsloketten`}>Openingsuren <Icon name="chevron-right" /></a></li>
				</NavBlock>
			</ContentBlock>
			<ContentBlock xs={12} sm={4} md={4}>
				<ButtonBlock
					title="Contact met stad Antwerpen"
					icon="envelope-o"
					buttonTitle="Overzicht contactmogelijkheden stad Antwerpen"
					url={`${Environment.getAstadUrl()}/info/5360f244b1a8a76a088b45c4/contacteer-stad-antwerpen-voor-meer-info`}>Contacteer ons</ButtonBlock>
				<ButtonBlock
					title="Schrijf u in op onze nieuwsbrief"
					buttonTitle="Schrijf u in op de antwerpen.be-nieuwsbrief"
					url={`${Environment.getAstadUrl()}/info/56cda8a3aba8a7f8158b4778`}>
					Antwerpen.be - nieuwsbrief</ButtonBlock>
				<SocialBlock
					title="Vind ons op"
					facebook="https://www.facebook.com/stad.antwerpen"
					twitter="https://twitter.com/Stad_Antwerpen"
					instagram="https://www.instagram.com/stad_antwerpen"
					linkedIn="https://www.linkedin.com/company/stad-antwerpen"
				/>
			</ContentBlock>
		</React.Fragment>
	)
}

const StandardSubFooter = ({ type }) => {
	switch(type) {
		case 'antwerpen':
			return <AstadSubFooter />;
		default:
			return <AstadSubFooter />;
	}
};

export default StandardSubFooter;
