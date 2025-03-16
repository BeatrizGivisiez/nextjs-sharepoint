export interface AddLightingComplaintRequestBody {
    Name: string;
    Address: string;
    Locality: string;
    PostalCode: string;
    PhoneNumber: string;
    Email: string;
    DamageLocality: string;
    MunicipalityDamage: string;
    ReferencePoints: string;
    DarkStreet: number;
    StartDoor: string;
    EndDoor: string;
    Comments: string;
    Attachments: File[]; 
}