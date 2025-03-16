export interface AddPowerOutageNotificationSubscriptionRequestBody {
    Name: string;
    Email: string;
    Locations: string[];
    Attachments: File[];
}