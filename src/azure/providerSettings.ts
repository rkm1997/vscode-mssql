/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ProviderSettings } from 'aad-library';


const publicAzureSettings: ProviderSettings = {
    displayName: 'publicCloudDisplayName',
    id: 'azure_publicCloud',
    loginEndpoint: 'https://login.microsoftonline.com/',
    portalEndpoint: 'https://portal.azure.com',
    redirectUri: 'https://vscode-redirect.azurewebsites.net/',
    resources: {
        windowsManagementResource: {
            id: 'marm',
            resource: 'MicrosoftResourceManagement',
            endpoint: 'https://management.core.windows.net/'
        },
        azureManagementResource: {
            id: 'arm',
            resource: '',
            endpoint: 'https://management.azure.com'
        }
        // graphResource: {
        //     id: '',
        //     resource: '',
        //     endpoint: ''
        // },
        // databaseResource: {
        //     id: '',
        //     resource: '',
        //     endpoint: ''
        // },
        // ossRdbmsResource: {
        //     id: '',
        //     resource: '',
        //     endpoint: ''
        // },
        // azureKeyVaultResource: {
        //     id: '',
        //     resource: '',
        //     endpoint: ''
        // },
        // azureDevopsResource: {
        //     id: '',
        //     resource: '',
        //     endpoint: ''
        // }
    }
};

const allSettings = publicAzureSettings;
export default allSettings;