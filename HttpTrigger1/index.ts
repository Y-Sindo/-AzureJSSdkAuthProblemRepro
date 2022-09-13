import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { WebPubSubServiceClient } from "@azure/web-pubsub";
import { DefaultAzureCredential } from "@azure/identity";

const webPubSubResourceName ="Please replace it with your web pubsub resource name";

const serviceClient = new WebPubSubServiceClient(
  `https://${webPubSubResourceName}.webpubsub.azure.com`,
  new DefaultAzureCredential(),
  "hub",
  {
    loggingOptions: {
      additionalAllowedHeaderNames: ["Authorization"],
    },
  }
);

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  try {
    await serviceClient.userExists("abc");
    context.res = {};
  } catch (e) {
    context.log(e);
    context.res = {
      status: 400,
    };
  }
};

export default httpTrigger;
