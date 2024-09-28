Feature('Verify Values for Asx Top 5');

// 1
Scenario('Check Values for Top 5 Stocks(Overall) Tab',  ({ I }) => {
   I.amOnPage('https://asxtop5.onrender.com/');      
   I.click('//*[@id="root"]/div/div[2]/label[1]');
   // Verify top 5 stock names (at specific locations)
   I.see('WHC', '//*[@id="marzen"]/table/tbody/tr[1]/td[1]');
   I.see('HDN', '//*[@id="marzen"]/table/tbody/tr[2]/td[1]');
   I.see('HLI', '//*[@id="marzen"]/table/tbody/tr[3]/td[1]');
   I.see('IGO', '//*[@id="marzen"]/table/tbody/tr[4]/td[1]');  
   I.see('MTS', '//*[@id="marzen"]/table/tbody/tr[5]/td[1]');    
   I.wait(2);  
});

// 2
Scenario('Check Values for 5 Highest Dividend Yields Tab',  ({ I }) => {
   I.amOnPage('https://asxtop5.onrender.com/');      
   I.click('#root > div > div.tabset > label:nth-child(4)');
   // Verify 5 highest dividend yields (at specific locations)
   I.see('10.94%','//*[@id="rauchbier"]/table/tbody/tr[1]/td[5]');
   I.see('9.95%','//*[@id="rauchbier"]/table/tbody/tr[2]/td[5]');
   I.see('8.94%','//*[@id="rauchbier"]/table/tbody/tr[3]/td[5]');
   I.see('8.58%','//*[@id="rauchbier"]/table/tbody/tr[4]/td[5]');
   I.see('8.52%','//*[@id="rauchbier"]/table/tbody/tr[5]/td[5]');
});
