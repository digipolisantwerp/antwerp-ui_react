import React from 'react';
import SubFooter from '../SubFooter';
import ContentBlock from './ContentBlock';
import NavBlock from './NavBlock';
import ButtonBlock from './ButtonBlock';
import SocialBlock from './SocialBlock';

const AstadSubFooter = () => {
	return (
		<SubFooter>
			<ContentBlock xs={12} sm={4} md={4}>
				<NavBlock title="Snel zelf regelen">
					<li><a title="Vraag een document aan" href={`/nl/eloket/overzicht`}>Documenten aanvragen <i className="fa fa-chevron-right"></i></a></li>
					<li><a title="Meld een sluikstort" href={`/nl/eloket/sluikstort`}>Sluikstort melden <i className="fa fa-chevron-right"></i></a></li>
					<li><a title="Geef een adreswijziging door" href={`/nl/eloket/aangifte-adreswijziging-nieuw`}>Adreswijziging doorgeven <i className="fa fa-chevron-right"></i></a></li>
					<li><a title="Regel een parkeerverbod" href={`/nl/e-loket/parkeerverbod`}>Parkeerverbod aanvragen <i className="fa fa-chevron-right"></i></a></li>
				</NavBlock>
			</ContentBlock>
			<ContentBlock xs={12} sm={4} md={4}>
				<NavBlock title="Dienstverlening">
					<li><a title="Naar het e-loket" href={`/nl/eloket/overzicht/`}>E-loket <i className="fa fa-chevron-right"></i></a></li>
					<li><a title="Maak een afspraak" href={`/nl/e-loket/afspraak-maken`}>Afspraak <i className="fa fa-chevron-right"></i></a></li>
					<li><a title="Maak een melding" href={`/nl/melden`}>Melding maken <i className="fa fa-chevron-right"></i></a></li>
					<li><a title="Naar openingsuren" href={`/nl/overzicht/adressen-en-openingsuren/stadsloketten`}>Openingsuren <i className="fa fa-chevron-right"></i></a></li>
				</NavBlock>
			</ContentBlock>
			<ContentBlock xs={12} sm={4} md={4}>
				<ButtonBlock
					title="Contact met stad Antwerpen"
					icon="envelope-o"
					buttonTitle="Overzicht contactmogelijkheden stad Antwerpen"
					url="/info/5360f244b1a8a76a088b45c4/contacteer-stad-antwerpen-voor-meer-info">Contacteer ons</ButtonBlock>
				<ButtonBlock
					title="Schrijf u in op onze nieuwsbrief"
					buttonTitle="Schrijf u in op de antwerpen.be-nieuwsbrief"
					url="/info/56cda8a3aba8a7f8158b4778">
					Antwerpen.be - nieuwsbrief</ButtonBlock>
				<SocialBlock
					title="Vind ons op"
					facebook="https://www.facebook.com/stad.antwerpen"
					twitter="https://twitter.com/Stad_Antwerpen"
					instagram="https://www.instagram.com/stad_antwerpen"
					linkedIn="https://www.linkedin.com/company/stad-antwerpen"
				/>
			</ContentBlock>
		</SubFooter>
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
