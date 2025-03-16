export interface AddOtherComplaintRequestBody {
    Name: string;
    Address: string;
    Locality: string;
    PostalCode: string;
    LocalConsumptionCodeId: string;
    PhoneNumber: string;
    Email: string;
    Reason: string;
    Comments: string;
    Attachments: File[]; 
}