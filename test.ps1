
for(($i=0);$i -lt 10; )
{
	Invoke-WebRequest https://FUNCTIONAPPNAME.azurewebsites.net/api/HttpTrigger1?
	Start-Sleep -seconds 0.5
}
