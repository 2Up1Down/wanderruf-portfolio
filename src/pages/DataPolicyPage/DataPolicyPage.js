import React from "react";
import styled from "styled-components";
import Theme from "../../styles/Theme";


const InfoSec = styled.section`
  color: ${Theme.color.mainWhite};
  padding: 10rem 1rem;
  max-width: 60rem;
  margin: auto;
`;


const DataPolicyPage = () => {
  return (
    <>
      <InfoSec dangerouslySetInnerHTML={{__html: htmlDataPolicy}}/>;
    </>
  );
};

export default DataPolicyPage;

const htmlDataPolicy = `
<h2>Datenschutzerkl&auml;rung</h2>
<p>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
<br/>
<p>Wendelin Steiner<br/>Hugosteinstrasse 57<br/>3957 Erschmatt</p>
<p>Telefon: 027 932 32 62<br/>E-Mail: wendelin.steiner@gmail.com<br/>WebSite: http://wanderruf.ch/ </p>
<p>&nbsp;</p>
<h2>Allgemeiner Hinweis</h2>
<p>
   Gest&uuml;tzt auf Artikel 13 der schweizerischen Bundesverfassung und den datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG<!--DSG-->) hat jede Person Anspruch auf Schutz ihrer Privatsph&auml;re sowie auf Schutz vor Missbrauch ihrer pers&ouml;nlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.
</p>
<p>In Zusammenarbeit mit unseren Hosting-Providern bem&uuml;hen wir uns, die Datenbanken so gut wie m&ouml;glich vor fremden Zugriffen, Verlusten, Missbrauch oder vor F&auml;lschung zu sch&uuml;tzen.</p>
<p>Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.</p>
<p>Durch die Nutzung dieser Website erkl&auml;ren Sie sich mit der Erhebung, Verarbeitung und Nutzung von Daten gem&auml;ss der nachfolgenden Beschreibung einverstanden. Diese Website kann grunds&auml;tzlich ohne Registrierung besucht werden. Dabei werden Daten wie beispielsweise aufgerufene Seiten bzw. Namen der abgerufenen Datei, Datum und Uhrzeit zu statistischen Zwecken auf dem Server gespeichert, ohne dass diese Daten unmittelbar auf Ihre Person bezogen werden. Personenbezogene Daten, insbesondere Name, Adresse oder E-Mail-Adresse werden soweit m&ouml;glich auf freiwilliger Basis erhoben. Ohne Ihre Einwilligung erfolgt keine Weitergabe der Daten an Dritte.</p>
<p>&nbsp;</p>
<h2>Datenschutzerkl&auml;rung f&uuml;r Kontaktformular</h2>
<p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
<p>&nbsp;</p>
<h2>Datenschutzerkl&auml;rung f&uuml;r Google Analytics</h2>
<p>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited. Wenn der Verantwortliche für die Datenverarbeitung auf dieser Website ausserhalb des Europäischen Wirtschaftsraumes oder der Schweiz sitzt, dann erfolgt die Google Analytics Datenverarbeitung durch Google LLC. Google LLC und Google Ireland Limited werden nachfolgend &laquo;Google&raquo; genannt.</p>
<p>Über die gewonnenen Statistiken können wir unser Angebot verbessern und für Sie als Nutzer interessanter ausgestalten. Diese Website verwendet Google Analytics zudem für eine geräteübergreifende Analyse von Besucherströmen, die über eine User-ID durchgeführt wird. Sofern Sie über ein Google-Benutzerkonto verfügen, können Sie in den dortigen Einstellungen unter &laquo;Meine Daten&raquo;, &laquo;persönliche Daten&raquo; die geräteübergreifende Analyse Ihrer Nutzung deaktivieren.</p>
<p>Rechtsgrundlage für die Nutzung von Google Analytics ist Art. 6 Abs. 1 S. 1 lit. f DS-GVO. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Wir weisen Sie darauf hin, dass auf dieser Website Google Analytics um den Code &laquo;_anonymizeIp();&raquo; erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen zu gewährleisten. Dadurch werden IP-Adressen gekürzt weiterverarbeitet, eine Personenbeziehbarkeit kann damit ausgeschlossen werden. Soweit den über Sie erhobenen Daten ein Personenbezug zukommt, wird dieser also sofort ausgeschlossen und die personenbezogenen Daten damit umgehend gelöscht.</p>
<p>Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websitenaktivitäten zusammenzustellen und um weitere mit der Websitennutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitenbetreiber zu erbringen.</p>
<p>Google Analytics verwendet Cookies. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="https://www.swissanwalt.ch/de/gaoptout.aspx" target="_blank" rel="noopener">Google Analytics deaktivieren</a>.</p>
<p>Ausserdem können Sie die Nutzung von Google Analytics auch verhindern, indem sie auf diesen Link klicken: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener">Google Analytics deaktivieren</a>. Hierdurch wird ein sog. opt-out Cookie auf ihrem Datenträger gespeichert, der die Verarbeitung personenbezogener Daten durch Google Analytics verhindert. Bitte beachten Sie, dass bei einem Löschen sämtlicher Cookies auf Ihrem Endgerät auch diese Opt-out-Cookies gelöscht werden, d.h., dass Sie erneut die Opt-out-Cookies setzen müssen, wenn Sie weiterhin diese Form der Datenerhebung verhindern wollen. Die Opt-out-Cookies sind pro Browser und Rechner/Endgerät gesetzt und müssen daher für jeden Browser, Rechner oder anderes Endgerät gesondert aktiviert werden.</p>
<p>&nbsp;</p>
<h2>Google Tag Manager</h2>
<p>Google Tag Manager ist eine L&ouml;sung, mit der wir sog. Website-Tags &uuml;ber eine Oberfl&auml;che verwalten k&ouml;nnen und so z.B. Google Analytics sowie andere Google-Marketing-Dienste in unser Onlineangebot einbinden können. Der Tag Manager selbst, welcher die Tags implementiert, verarbeitet keine personenbezogenen Daten der Nutzer. Im Hinblick auf die Verarbeitung der personenbezogenen Daten der Nutzer wird auf die folgenden Angaben zu den Google-Diensten verwiesen. Nutzungsrichtlinien: <a href="https://www.google.com/intl/de/tagmanager/use-policy.html" target="_blank" rel="noopener">https://www.google.com/intl/de/tagmanager/use-policy.html</a>.</p>
<p>&nbsp;</p>
<h2>Datenschutzerkl&auml;rung f&uuml;r Facebook</h2>
<p>Diese Website verwendet Funktionen von Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA . Bei Aufruf unserer Seiten mit Facebook-Plug-Ins wird eine Verbindung zwischen Ihrem Browser und den Servern von Facebook aufgebaut. Dabei werden bereits Daten an Facebook &uuml;bertragen. Besitzen Sie einen Facebook-Account, k&ouml;nnen diese Daten damit verkn&uuml;pft werden. Wenn Sie keine Zuordnung dieser Daten zu Ihrem Facebook-Account w&uuml;nschen, loggen Sie sich bitte vor dem Besuch unserer Seite bei Facebook aus. Interaktionen, insbesondere das Nutzen einer Kommentarfunktion oder das Anklicken eines „Like“- oder „Teilen“-Buttons werden ebenfalls an Facebook weitergegeben. Mehr erfahren Sie unter <a href="https://de-de.facebook.com/about/privacy" target="_blank" style="color: inherit;">https://de-de.facebook.com/about/privacy</a>.</p>
<p>&nbsp;</p>
<h2>Datenschutzerkl&auml;rung f&uuml;r Twitter</h2>
<p>Diese Website verwendet Funktionen von Twitter, Inc., 1355 Market St, Suite 900, San Francisco, CA 94103, USA. Bei Aufruf unserer Seiten mit Twitter-Plug-Ins wird eine Verbindung zwischen Ihrem Browser und den Servern von Twitter aufgebaut. Dabei werden bereits Daten an Twitter &uuml;bertragen. Besitzen Sie einen Twitter-Account, k&ouml;nnen diese Daten damit verkn&uuml;pft werden. Wenn Sie keine Zuordnung dieser Daten zu Ihrem Twitter-Account wünschen, loggen Sie sich bitte vor dem Besuch unserer Seite bei Twitter aus. Interaktionen, insbesondere das Anklicken eines „Re-Tweet“-Buttons werden ebenfalls an Twitter weitergegeben. Mehr erfahren Sie unter <a href="https://twitter.com/privacy" target="_blank" style="color: inherit;">https://twitter.com/privacy</a>.</p>
<p>&nbsp;</p>
<h2>Datenschutzerkl&auml;rung f&uuml;r Instagram</h2>
<p>Auf unserer Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA integriert. Wenn Sie in Ihrem Instagram-Account eingeloggt sind k&ouml;nnen Sie durch Anklicken des Instagram-Buttons die Inhalte unserer Seiten mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der &uuml;bermittelten Daten sowie deren Nutzung durch Instagram erhalten.</p>
<p>Weitere Informationen hierzu finden Sie in der Datenschutzerkl&auml;rung von Instagram: <a href="https://instagram.com/about/legal/privacy/" target="_blank" style="color: inherit;">http://instagram.com/about/legal/privacy/</a></p>
<p>&nbsp;</p>
<h2>Datenschutzerkl&auml;rung f&uuml;r LinkedIn</h2>
<p>Wir setzen innerhalb unseres Onlineangebotes die Marketing-Dienste des sozialen Netzwerks LinkedIn der LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Ireland (&laquo;LinkedIn&raquo;) ein.</p>
<p>Diese verwenden Cookies, also Textdateien, die auf Ihrem Computer gespeichert werden. Dies erm&ouml;glicht uns eine Analyse der Benutzung der Internetseite durch Sie. So k&ouml;nnen wir beispielsweise den Erfolg unserer Anzeigen messen und Nutzern Produkte anzeigen, f&uuml;r die sie sich zuvor interessiert haben.</p>
<p>Erfasst werden dadurch z.B. Informationen zum Betriebssystem, zum Browser, die von Ihnen zuvor aufgerufene Internetseite (Referrer-URL), welche Webseiten der Nutzer aufgesucht, welche Angebote der Nutzer angeklickt hat, und Datum und Uhrzeit Ihres Besuchs auf unserer Internetseite.</p>
<p>Die durch das Cookie erzeugten Informationen &uuml;ber Ihre Benutzung dieser Internetseite werden pseudonymisiert an einen Server von LinkedIn in den USA &uuml;bertragen und dort gespeichert. LinkedIn speichert also nicht den Namen oder die E-Mailadresse des jeweiligen Nutzers. Die oben genannten Daten werden vielmehr nur demjenigen zugeordnet, bei dem das Cookie erzeugt wurde. Dies gilt nicht, sofern der Nutzer LinkedIn eine Verarbeitung ohne Pseudonymisierung erlaubt hat oder ein LinkedIn-Konto hat.</p>
<p>Sie k&ouml;nnen die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall m&ouml;glicherweise nicht s&auml;mtliche Funktionen dieser Internetseite vollumf&auml;nglich werden nutzen k&ouml;nnen. Der Nutzung Ihrer Daten k&ouml;nnen sie auch direkt bei LinkedIn widersprechen: <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" target="_blank" rel="noopener">https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out</a>.</p>
<p>Wir nutzen LinkedIn Analytics, um die Nutzung unserer Website analysieren und regelm&auml;ssig verbessern zu k&ouml;nnen. &Uuml;ber die gewonnenen Statistiken k&ouml;nnen wir unser Angebot verbessern und f&uuml;r Sie als Nutzer interessanter ausgestalten. Alle LinkedIn Unternehmen haben die Standardvertragsklauseln angenommen, um zu gew&auml;hrleisten, dass der f&uuml;r die Entwicklung, Durchf&uuml;hrung und Erhaltung der Dienste notwendige Datenverkehr in die USA und Singapur auf rechtm&auml;ssige Weise stattfindet. Sofern wir die Nutzer um eine Einwilligung bitten, ist die Rechtsgrundlage f&uuml;r die Verarbeitung Art. 6 Abs. 1 lit. a DSGVO. Ansonsten ist Rechtsgrundlage f&uuml;r die Nutzung von LinkedIn Analytics Art. 6 Abs. 1 S. 1 lit. f DSGVO.</p>
<p>Informationen des Drittanbieters: LinkedIn Ireland Unlimited Company Wilton Place, Dublin 2 Ireland; <a href="https://www.linkedin.com/legal/user-agreement?_l=de_DE" target="_blank" rel="noopener">Nutzervereinbarung</a> und <a href="https://www.linkedin.com/legal/privacy-policy?_l=de_DE" target="_blank" rel="noopener">Datenschutzerkl&auml;rung</a>.</p>
<p>&nbsp;</p>
<h2>&Auml;nderungen</h2>
<p>Wir k&ouml;nnen diese Datenschutzerkl&auml;rung jederzeit ohne Vorank&uuml;ndigung anpassen. Es gilt die jeweils aktuelle, auf unserer Website publizierte Fassung. Soweit die Datenschutzerkl&auml;rung Teil einer Vereinbarung mit Ihnen ist, werden wir Sie im Falle einer Aktualisierung über die &Auml;nderung per E-Mail oder auf andere geeignete Weise informieren.</p>
<p>&nbsp;</p>
<h2>Fragen an den Datenschutzbeauftragten</h2>
<p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die f&uuml;r den Datenschutz zu Beginn der Datenschutzerkl&auml;rung aufgef&uuml;hrten, verantwortlichen Person in unserer Organisation.</p>
<p>&nbsp;</p>
<!--ACHTUNG: Wenn Sie die Quelle ohne Erlaubnis von SwissAnwalt entfernen, dann begehen Sie eine Urheberrechtsverletzung welche in jedem Fall unter Kostenfolge geahndet wird.--><br/>Quelle: <a href="https://www.swissanwalt.ch" target="_blank" rel="noopener">SwissAnwalt</a></p><!--Bitte beachten Sie die AGB von SwissAnwalt betreffend allfällig anfallenden Kosten bei Weglassen der Quelle!-->

`