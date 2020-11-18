OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Tento uživatelský účet byl znepřístupněn, obraťte se na správce.",
    "Saved" : "Uloženo",
    "Provider" : "Poskytovatel",
    "Unknown error, please check the log file for more details." : "Neznámá chyba, podrobnosti naleznete v záznamu událostí.",
    "Direct log in" : "Přímé přihlášení",
    "SSO & SAML log in" : "SSO a SAML přihlášení",
    "This page should not be visited directly." : "Tato stránka by neměla být zobrazována přímo.",
    "Provider " : "Poskytovatel",
    "X.509 certificate of the Service Provider" : "X.509 certifikát poskytovatele služby",
    "Private key of the Service Provider" : "Soukromý klíč poskytovatele služby",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Značí, že nameID <samlp:logoutRequest> odeslané tímto poskytovatelem služeb bude šifrováno.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Indikuje, zda budou zprávy <samlp:AuthnRequest> odeslané tímto SP podepsané. [Tato informace bude dostupná v metadatech SP]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Indikuje, zda budou zprávy <samlp:logoutRequest> odeslané tímto SP podepsané.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Indikuje, zda budou zprávy <samlp:logoutResponse> odeslané tímto  SP podepsané.",
    "Whether the metadata should be signed." : "Zda mají být metadata podepisována.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Indikuje požadavek na podepsání elementů <samlp:Response>, <samlp:LogoutRequest> a <samlp:LogoutResponse> ve zprávách tímto SP.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Indikuje požadavek na podepsání elementů <saml:Assertion> přijaté tímto SP. [Tato informace bude dostupná v metadatech SP]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Indikuje požadavek na šifrování elementů <saml:Assertion> přijaté tímto SP.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : " Indikuje požadavek na přítomnost elementu NameID v SAMLResponse přijaté tímto SP.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Indikuje požadavek poskytovatele služby na přijetí NameID v zašifrované podobě.",
    "Indicates if the SP will validate all received XML." : "Indikuje, zda poskytovatel služeb ověří všechna přijatá XML.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL kóduje SAML data malými písmeny, a toolkit používá ve výchozím nastavení velká písmena. Povolit pro ADFS kompatibilitu pro ověření podpisu.",
    "Algorithm that the toolkit will use on signing process." : "Algoritmus který sada nástrojů použije při procesu podepisování.",
    "Attribute to map the UID to." : "Atribut k přiřazení UID.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Přihlášení povolit pouze pokud účet už existuje i někde jinde. (např. LDAP)",
    "Attribute to map the displayname to." : "Atribut, na který se má mapovat zobrazované jméno.",
    "Attribute to map the email address to." : "Atribut, na který se má mapovat e-mailová adresa.",
    "Attribute to map the quota to." : "Atribut, na který namapovat kvótu.",
    "Attribute to map the users groups to." : "Atribut, na který namapovat uživatelovy skupiny.",
    "Attribute to map the users home to." : "Atribut, na který namapovat uživatelovu domovskou složku.",
    "Email address" : "E-mailová adresa",
    "Encrypted" : "Šifrováno",
    "Entity" : "Entita",
    "Kerberos" : "Kerberos",
    "Persistent" : "Trvalé",
    "Transient" : "Přechodné",
    "Unspecified" : "Neurčeno",
    "Windows domain qualified name" : "Úplný název domény Windows",
    "X509 subject name" : "Název subjektu pro X509",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Použít SAML pro %s desktopové klienty (vyžaduje, aby se uživatele znovu přihlásil)",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "Volitelný zobrazovaný název poskytovatele identity (výchozí: „SSO a SAML přihlášení“)",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Umožnit použití vícero podpůrných vrstev pro uživatelské účty (např. LDAP)",
    "SSO & SAML authentication" : "SSO a SAML ověření",
    "Authenticate using single sign-on" : "Ověřit pomocí sjednoceného přihlášení (sso)",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "Použitím SSO & SAML aplikace svého Nextcloud do něho můžete snadno začlenit své stávající řešení pro sjednocené přihlašování. Krom toho můžete použít Nextcloud LDAP poskytovatele uživatelů pro pohodlí uživatelů. (např. při sdílení)\nV tuto chvíli jsou podporováni a vyzkoušení tito poskytovatelé:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Ověřování prostřednictvím proměnné prostředí**\n\t* Kerberos (mod_auth_kerb)\n\t* Jakýkoli jiný poskytovatel který ověřuje pomocí proměnné prostředí\n\nByť by teoreticky mohl být podporovaný jakýkoli poskytovatel, implementující buď jednu nebo druhý z těchto standardů, rádi bychom poznamenali, že nejsou součástí mřížky interních testů.",
    "Open documentation" : "Otevřít dokumentaci",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore, unless you enabled \"%s\" or you go directly to the URL %s." : "Nezapomeňte nastavit správního uživatele, který může přistupovat k instanci prostřednictvím SSO. Přihlášení vaším běžným %s účtem nadále nebude možné, pokud nezapnete „%s“ nebo nepůjdete přímo na URL %s.",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore, unless you go directly to the URL %s." : "Nezapomeňte nastavit správního uživatele který může přistupovat k instanci přes SSO. Přihlašování vaším běžným %s účtem nadále nebude možné, jedině že půjdete přímo na URL %s.",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Vyberte zda chcete ověřovat za použití dodané zabudované SAML funkce v Nextcloud nebo zda chcete ověřovat za pomoci proměnné prostředí.",
    "Use built-in SAML authentication" : "Použít zabudované SAML ověření",
    "Use environment variable" : "Použít hodnotu z proměnné prostředí",
    "Global settings" : "Globální nastavení",
    "Remove identity provider" : "Vzdálený poskytovatel identity",
    "Add identity provider" : "Přidat poskytovatele identity",
    "General" : "Obecné",
    "Service Provider Data" : "Poskytovatel datových služeb",
    "If your Service Provider should use certificates you can optionally specify them here." : "Pokud by měl váš poskytovatel služeb používat certifikáty, můžete je zde specifikovat.",
    "Show Service Provider settings…" : "Zobrazit nastavení poskytovatele služeb…",
    "Name ID format" : "Formát identifikátoru názvu",
    "Identity Provider Data" : "Poskytovatel přihlašovacích dat",
    "Configure your IdP settings here." : "Zde lze vytvořit nastavení pro poskytovatele přihlašovacích údajů.",
    "Identifier of the IdP entity (must be a URI)" : "Identifikátor entity z poskytovatele identit (je třeba, aby bylo URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "Cíl URL IdP, kam SP odešle zprávu s požadavkem na ověření se",
    "Show optional Identity Provider settings…" : "Zobrazit nepovinná nastavení poskytovatele přihlašovacích údajů…",
    "URL Location of the IdP where the SP will send the SLO Request" : "Umístění URL IdP, kam SP odešle SLO požadavek",
    "Public X.509 certificate of the IdP" : "Veřejný X.509 certifikát poskytovatele přihlašovacích údajů",
    "Attribute mapping" : "Mapování atributů",
    "If you want to optionally map attributes to the user you can configure these here." : "Pokud chcete volitelně provést mapování atributů na uživatele, můžete to provést zde.",
    "Show attribute mapping settings…" : "Zobrazit nastavení pro mapování atributů…",
    "Security settings" : "Nastavení zabezpečení",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Pro zvýšení bezpečnosti doporučujeme povolení následujících možností, pokud jsou tyto podporovány ve vašem prostředí.",
    "Show security settings…" : "Zobrazit nastavení zabezpečení…",
    "Signatures and encryption offered" : "Podpisy a šifrování nabízeno",
    "Signatures and encryption required" : "Podpisy a šifrování vyžadováno",
    "Download metadata XML" : "Stahovat metadata XML",
    "Reset settings" : "Resetovat nastavení",
    "Metadata invalid" : "Metadata neplatná",
    "Metadata valid" : "Metadata platná",
    "Error" : "Chyba",
    "Account not provisioned." : "Účet není zprovozněn.",
    "Your account is not provisioned, access to this service is thus not possible." : "Váš účet ještě nebyl zprovozněn, přístup ke službě tedy ještě není možný.",
    "Login options:" : "Možnosti přihlašování:",
    "Choose a authentication provider" : "Zvolte poskytovatele ověřování"
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;");
