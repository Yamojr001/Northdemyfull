<?php

namespace Database\Seeders;

use App\Models\Partner;
use Illuminate\Database\Seeder;

class PartnerSeeder extends Seeder
{
    public function run(): void
    {
        $partners = [
            ['name' => 'Microsoft', 'logo_url' => 'https://logo.clearbit.com/microsoft.com'],
            ['name' => 'Google', 'logo_url' => 'https://logo.clearbit.com/google.com'],
            ['name' => 'Amazon Web Services', 'logo_url' => 'https://logo.clearbit.com/aws.amazon.com'],
            ['name' => 'IBM', 'logo_url' => 'https://logo.clearbit.com/ibm.com'],
            ['name' => 'Oracle', 'logo_url' => 'https://logo.clearbit.com/oracle.com'],
            ['name' => 'SAP', 'logo_url' => 'https://logo.clearbit.com/sap.com'],
            ['name' => 'Cisco', 'logo_url' => 'https://logo.clearbit.com/cisco.com'],
            ['name' => 'Dell Technologies', 'logo_url' => 'https://logo.clearbit.com/dell.com'],
            ['name' => 'VMware', 'logo_url' => 'https://logo.clearbit.com/vmware.com'],
            ['name' => 'Red Hat', 'logo_url' => 'https://logo.clearbit.com/redhat.com'],
            ['name' => 'Salesforce', 'logo_url' => 'https://logo.clearbit.com/salesforce.com'],
            ['name' => 'Adobe', 'logo_url' => 'https://logo.clearbit.com/adobe.com'],
            ['name' => 'Intel', 'logo_url' => 'https://logo.clearbit.com/intel.com'],
            ['name' => 'Huawei', 'logo_url' => 'https://logo.clearbit.com/huawei.com'],
            ['name' => 'Mastercard Foundation', 'logo_url' => 'https://logo.clearbit.com/mastercardfdn.org'],
            ['name' => 'African Development Bank', 'logo_url' => 'https://ui-avatars.com/api/?name=AfDB&size=200&background=005EB8&color=fff&bold=true'],
            ['name' => 'World Bank Group', 'logo_url' => 'https://logo.clearbit.com/worldbank.org'],
            ['name' => 'Tony Elumelu Foundation', 'logo_url' => 'https://ui-avatars.com/api/?name=TEF&size=200&background=e63946&color=fff&bold=true'],
            ['name' => 'Nigerian Communications Commission', 'logo_url' => 'https://ui-avatars.com/api/?name=NCC&size=200&background=008751&color=fff&bold=true'],
            ['name' => 'Jigawa State Government', 'logo_url' => 'https://ui-avatars.com/api/?name=JSG&size=200&background=228B22&color=fff&bold=true'],
            ['name' => 'Kano State ICT Agency', 'logo_url' => 'https://ui-avatars.com/api/?name=KSICTA&size=200&background=FF6B35&color=fff&bold=true'],
            ['name' => 'Bayero University Kano', 'logo_url' => 'https://ui-avatars.com/api/?name=BUK&size=200&background=800020&color=fff&bold=true'],
            ['name' => 'Ahmadu Bello University', 'logo_url' => 'https://ui-avatars.com/api/?name=ABU&size=200&background=006400&color=fff&bold=true'],
            ['name' => 'University of Abuja', 'logo_url' => 'https://ui-avatars.com/api/?name=UNIABUJA&size=200&background=191970&color=fff&bold=true'],
        ];

        foreach ($partners as $partner) {
            Partner::create($partner);
        }
    }
}
