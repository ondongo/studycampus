export enum TypeStudent {
    NOUVEAU_BACHELIER   = 'NOUVEAU_BACHELIER',
    PAS_ENCORE_BACHELIER= 'PAS_ENCORE_BACHELIER',
    LICENCE             = 'LICENCE',
    DIPLOME_SUPERIEUR   = 'DIPLOME_SUPERIEUR'
}

export enum Source {
    BOURSE = 'BOURSE',
    CAMPUS_FRANCE = 'CAMPUS_FRANCE'
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
    profilePicture?: string;
    createdAt: Date;
    typeStudent: TypeStudent;
    source: Source;
    isSeen: boolean;
    isContacted: boolean;
}