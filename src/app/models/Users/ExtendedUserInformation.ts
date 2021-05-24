import { ExtendedInformationForm } from 'src/app/_forms/ExtendedUserInfoForm';

export class UserExtendedInformation
{
      UserId  :string;
      ExternalWebsiteToScan  :string;
      ExternalEndPointsToScan  :string;
      DomainNameForScan  :string;
      CompanyName  :string;
      FirstName  :string;
      OfficeTenant  :string;
      LastName  :string;
      Email  :string;
      public static ToRequestModel(firstName: string,lastName:
             string,ExternalWebsiteToScan: string,DomainNameForScan: 
             string,ExternalEndPointsToScan: string
             ,Email: string,OfficeTenant: string,
             CompanyName: string)
      {
          var objectToReturn =  new ExtendedInformationForm();
          objectToReturn.FirstName = firstName;
          objectToReturn.LastName = lastName;
          objectToReturn.ExternalWebsiteToScan = ExternalWebsiteToScan;
          objectToReturn.DomainNameForScan = DomainNameForScan;
          objectToReturn.ExternalEndPointsToScan = ExternalEndPointsToScan;
          objectToReturn.Email =Email;
          objectToReturn.OfficeTenant = OfficeTenant;
          objectToReturn.CompanyName = CompanyName;
          return JSON.stringify(objectToReturn)
      }

      public static GetPopulatedForm(model:UserExtendedInformation ) :ExtendedInformationForm
      {
        let form = new ExtendedInformationForm();
        
        form.FirstName = model.FirstName;
        form.LastName = model.LastName;
        form.ExternalWebsiteToScan = model.ExternalWebsiteToScan;
        form.DomainNameForScan = model.DomainNameForScan;
        form.ExternalEndPointsToScan = model.ExternalEndPointsToScan;
        form.Email = model.Email;
        form.OfficeTenant = model.OfficeTenant;
        form.CompanyName = model.CompanyName;
        form.UserId = model.UserId;
        return form;
      }

      public GetModelFromForm(form:ExtendedInformationForm ) :UserExtendedInformation
      {
        let model:UserExtendedInformation;

        form.FirstName = model.FirstName;
        form.LastName = model.LastName;
        form.ExternalWebsiteToScan = model.ExternalWebsiteToScan;
        form.DomainNameForScan = model.DomainNameForScan;
        form.ExternalEndPointsToScan = model.ExternalEndPointsToScan;
        form.Email = model.Email;
        form.OfficeTenant = model.OfficeTenant;
        form.CompanyName = model.CompanyName;
        form.UserId = model.UserId;
        return model;
      }





}
