export enum TypeStudent {
    NOUVEAU_BACHELIER   = 'NOUVEAU_BACHELIER',
    PAS_ENCORE_BACHELIER= 'PAS_ENCORE_BACHELIER',
    LICENCE             = 'LICENCE',
    DIPLOME_SUPERIEUR   = 'DIPLOME_SUPERIEUR'
}

export interface Etudiant {
    id: string;
    fname: string;
    lname: string;
    email: string;
    codeCountry: string;
    phone: string;
    school: string;
    yearCompletion: string;
    qualification: string;
    additionalInfo?: string;
    birthDate: Date;
    zipUrl: string;
    createdAt: Date;
    typeStudent: TypeStudent;
    isSeen: boolean;
    isContacted: boolean;
}