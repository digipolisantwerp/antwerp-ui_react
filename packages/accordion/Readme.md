You can use the `open`-attribute on on `AccordionTab` to render it as open initially.

```js
const AccordionTab = require("./src").AccordionTab;
const AccordionTabHeader = require("./src").AccordionTabHeader;
const AccordionTabContent = require("./src").AccordionTabContent;

<Accordion>
  <AccordionTab>
    <AccordionTabHeader>Paris</AccordionTabHeader>
    <AccordionTabContent>
      Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.
    </AccordionTabContent>
  </AccordionTab>
  <AccordionTab open>
    <AccordionTabHeader>New York</AccordionTabHeader>
    <AccordionTabContent>
      New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.
    </AccordionTabContent>
  </AccordionTab>
  <AccordionTab>
    <AccordionTabHeader>London</AccordionTabHeader>
    <AccordionTabContent>
    London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.
    </AccordionTabContent>
  </AccordionTab>
  <AccordionTab>
    <AccordionTabHeader>Hong Kong</AccordionTabHeader>
    <AccordionTabContent>
      Hong Kong is an autonomous territory, and former British colony, in southeastern China. Its vibrant, densely populated urban centre is a major port and global financial hub with a skyscraper-studded skyline. Central (the business district) features architectural landmarks like I.M. Pei’s Bank of China Tower. Hong Kong is also a major shopping destination, famed for bespoke tailors and Temple Street Night Market.
    </AccordionTabContent>
  </AccordionTab>
</Accordion>
```
