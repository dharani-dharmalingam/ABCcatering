import { ArrowLeft, Phone, Globe, Heart, Shield, Eye, Briefcase, DollarSign, Car, Scale, PawPrint, AlertCircle, Building2, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ImportantContacts = () => {
  const contacts = [
    {
      category: "Medical Plan",
      icon: Stethoscope,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      providers: [
        {
          name: "Blue Cross Blue Shield",
          group: "Group: 71-6192N",
          phone: "1.800.830.1501",
          website: "www.myhealthtoolkitfl.com"
        }
      ]
    },
    {
      category: "Dental Plan",
      icon: Heart,
      color: "text-green-600",
      bgColor: "bg-green-50",
      providers: [
        {
          name: "MetLife",
          group: "Group: 5986085",
          phone: "1.800.275.4638",
          website: "www.metlife.com/dental"
        }
      ]
    },
    {
      category: "Vision Plans",
      icon: Eye,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      providers: [
        {
          name: "Vision Service Plan (VSP)",
          group: "Group: 30085963",
          phone: "1.800.877.7195",
          website: "www.vsp.com"
        }
      ]
    },
    {
      category: "Health Savings Account (HSA)",
      icon: DollarSign,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      providers: [
        {
          name: "Fidelity",
          phone: "800.835.5095",
          website: "www.fidelity.com"
        }
      ]
    },
    {
      category: "Flexible Spending Account (FSA)",
      icon: Briefcase,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      providers: [
        {
          name: "Fidelity",
          phone: "800.835.5095",
          website: "www.fidelity.com"
        }
      ]
    },
    {
      category: "Life & Disability",
      icon: Shield,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      providers: [
        {
          name: "Mutual of Omaha",
          group: "Group: G000AK86",
          details: [
            { label: "Life/CI/Accident", phone: "1.800.775.8805" },
            { label: "Disability", phone: "1.800.877.5176" }
          ],
          website: "www.mutualofomaha.com"
        }
      ]
    },
    {
      category: "401(k) Retirement Plan",
      icon: Building2,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      providers: [
        {
          name: "Fidelity",
          phone: "800.835.5095",
          website: "www.fidelity.com"
        }
      ]
    },
    {
      category: "Pet Insurance",
      icon: PawPrint,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      providers: [
        {
          name: "PetPartners",
          phone: "1.866.774.1113",
          website: "https://www.petpartners.com/enroll?p=RSandH"
        }
      ]
    },
    {
      category: "ID Theft",
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      providers: [
        {
          name: "Allstate Identity Protection",
          phone: "1.800.789.2720",
          website: "https://www.myaip.com/abccatering"
        }
      ]
    },
    {
      category: "Legal Plan",
      icon: Scale,
      color: "text-slate-600",
      bgColor: "bg-slate-50",
      providers: [
        {
          name: "MetLife",
          phone: "1.800.821.6400",
          website: "info.legalplans.com",
          note: "Access Code: Legal"
        }
      ]
    },
    {
      category: "Associate Assistance Program (EAP) / Benefits & Claims Assistance",
      icon: Heart,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      providers: [
        {
          name: "Health Advocate",
          phone: "1.866.799.2728",
          website: "www.healthadvocate.com/members"
        }
      ]
    },
    {
      category: "Auto Insurance",
      icon: Car,
      color: "text-blue-700",
      bgColor: "bg-blue-50",
      providers: [
        {
          name: "Farmers GroupSelect",
          phone: "1.800.422.4272"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner */}
      <section className="relative h-64 bg-gradient-to-r from-white to-green-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-abc-blue">
            Important Contacts
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Find the right contact for all your benefits and services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-6 print:hidden">
          <Link to="/benefits">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Back to Benefits</span>
            </Button>
          </Link>
        </div>
        <div className="space-y-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card key={index} className="overflow-hidden border-l-4 border-l-abc-primary shadow-md hover:shadow-lg transition-shadow">
                <div className={`${contact.bgColor} p-4 border-b`}>
                  <div className="flex items-center gap-3">
                    <div className={`${contact.color} p-2 bg-white rounded-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="font-bold text-lg text-gray-800">{contact.category}</h2>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <div className="space-y-6">
                    {contact.providers.map((provider, providerIndex) => (
                      <div key={providerIndex} className={providerIndex > 0 ? "pt-6 border-t border-gray-200" : ""}>
                        <div className="space-y-3">
                          <h3 className="font-semibold text-gray-900">{provider.name}</h3>
                          
                          {provider.group && (
                            <p className="text-sm text-gray-600">{provider.group}</p>
                          )}
                          
                          {provider.details ? (
                            <div className="space-y-2">
                              {provider.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="flex items-start gap-2 text-sm">
                                  <span className="font-medium text-gray-700">{detail.label}:</span>
                                  <a href={`tel:${detail.phone.replace(/\./g, '')}`} className="text-abc-primary hover:underline">
                                    {detail.phone}
                                  </a>
                                </div>
                              ))}
                            </div>
                          ) : provider.phone && (
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="h-4 w-4 text-abc-primary flex-shrink-0" />
                              <a href={`tel:${provider.phone.replace(/\./g, '').replace(/\s/g, '').replace(/\(/g, '').replace(/\)/g, '')}`} className="text-abc-primary hover:underline font-medium">
                                {provider.phone}
                              </a>
                            </div>
                          )}
                          
                          {provider.website && (
                            <div className="flex items-center gap-2 text-sm">
                              <Globe className="h-4 w-4 text-abc-primary flex-shrink-0" />
                              <a 
                                href={provider.website.startsWith('http') ? provider.website : `https://${provider.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-abc-primary hover:underline font-medium break-all"
                              >
                                {provider.website}
                              </a>
                            </div>
                          )}
                          
                          {provider.note && (
                            <p className="text-sm text-gray-700 font-medium italic">{provider.note}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ImportantContacts;
