export type DocumentTypes = {
  default: {
    investorfirstname: string;
  };
  sharePurchase: {
    shares: number;
    investorfirstname: string;
    investorlastname: string;
    investorphone: string;
    investorinitial: string;
    investorcompanyname: string;
    investorprimaryphonecontact: string;
    investoraddress: string;
    investortown: string;
    investorstate: string;
    investorCountry: string;
    investorzip: string;
    investoremail: string;
    projectname: string;
    currentDate: string;
    totalprice: number;
  };
};

type DocumentTypeName<A> = {
  title: string;
  fields: { [id in keyof A]: string };
};

type AutofillKey<A extends keyof DocumentTypes> = keyof DocumentTypes[A];

export const autofillFieldIds: { [id in keyof DocumentTypes]: AutofillKey<id>[] } = {
  default: [],
  sharePurchase: [
    'shares',
    'investorfirstname',
    'investorlastname',
    'investorphone',
    'investorinitial',
    'investorcompanyname',
    'investorprimaryphonecontact',
    'investoraddress',
    'investortown',
    'investorstate',
    'investorCountry',
    'investorzip',
    'investoremail',
    'projectname',
    'currentDate',
    'totalprice',
  ],
};
// // export const documentTypeNames: {
// //     [id in keyof DocumentTypes]: DocumentTypeName<DocumentTypes[id]>;
// // } = {
// //     default: {
// //         title: "default",
// //         fields: {},
// //     },
// //     sharePurchase: {
// //         title: "Share purchasing",
// //         fields: {
// //             shares: "number",
// //             investorfirstname: "string",
// //             investorlastname: "string",
// //             investorphone: "string",
// //             investorinitial: "string",
// //             investorcompanyname: "string",
// //             investorprimaryphonecontact: "string",
// //             investoraddress: "string",
// //             investortown: "string",
// //             investorstate: "string",
// //             investorCountry:'',
// //             investorzip: "string",
// //             investoremail: "string",
// //             projectname: "string",
// //             currentDate: "string",
// //             totalprice: "number",
// //         },
// //     },
// // };
