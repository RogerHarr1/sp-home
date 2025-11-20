"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";

// Base URL for external links - update this to match your server
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://sphome.specialtyproduce.com";

interface LinkGroup {
  title: string;
  links: Array<{
    label: string;
    href: string;
    external?: boolean;
    bold?: boolean;
  }>;
}

// Helper function to get the full URL for a link
const getLinkUrl = (href: string, isExternal: boolean): string => {
  // If it already starts with http, return as is
  if (href.startsWith("http")) {
    return href;
  }
  // If it's external but relative, prepend base URL
  if (isExternal && href.startsWith("/")) {
    return `${BASE_URL}${href}`;
  }
  // Otherwise return as is (for internal Next.js routes)
  return href;
};

const linkGroups: LinkGroup[] = [
  {
    title: "Operations",
    links: [
      { label: "Dart Driver GPS", href: "/DartGPS", external: true },
      { label: "Routing", href: "/Routing", external: true },
      { label: "Invoice Info", href: "/InvoiceInfo", external: true },
      { label: "Reports", href: "/Reports", external: true },
      { label: "Delivery Pics", href: "/DeliveryPics", external: true },
      { label: "Product Pics", href: "/Pics", external: true },
      { label: "Service Request Form", href: "https://form.jotform.com/73315668199166", external: true },
    ],
  },
  {
    title: "Purchasing",
    links: [
      { label: "LA Truck Tracking", href: "https://www.specialtyproduce.com/la", external: true },
      { label: "SD Purchase Tracking", href: "https://www.specialtyproduce.com/sd", external: true },
      { label: "FMB PickUps", href: "/fmbpickup", external: true },
      { label: "Retail", href: "/Retail", external: true, bold: true },
    ],
  },
  {
    title: "Specialty Produce Website",
    links: [
      { label: "Homepage", href: "https://www.specialtyproduce.com", external: true },
      { label: "Sales", href: "https://www.specialtyproduce.com/sales", external: true },
      { label: "Editor", href: "https://www.specialtyproduce.com/editor", external: true },
    ],
  },
  {
    title: "HR",
    links: [
      { label: "Health Self-Assessment Form", href: "https://form.jotform.com/201391474965058", external: true, bold: true },
      { label: "ADP Login", href: "https://workforcenow.adp.com/workforcenow/login.html", external: true },
      { label: "Manager Form", href: "https://form.jotform.com/82494937599177", external: true },
      { label: "Employee Phone List", href: "/PhoneLists", external: true },
      { label: "401K Plan Login", href: "https://participant.empower-retirement.com/participant/#/login", external: true },
      { label: "Employee Handbook - English", href: "/docs/2020-California-Employee-Handbook-200827.pdf", external: true },
      { label: "Employee Handbook - Spanish", href: "/docs/2020-California-Employee-Handbook-200827-Spanish.pdf", external: true },
      { label: "Uniform Login", href: "https://specialtyproduce.mybrightsites.com/account/login", external: true },
      { label: "ADP & Makeshift Info", href: "/hr/adp_makeshift.htm", external: true },
    ],
  },
  {
    title: "Accounting",
    links: [
      { label: "Invoice Archive", href: "/InvoiceArchive", external: true },
      { label: "Clover Transactions", href: "/CloverTransactions", external: true },
    ],
  },
  {
    title: "Miscellaneous",
    links: [
      { label: "SP Apps and Web Password Reset", href: "https://sphome.specialtyproduce.com/pwreset/", external: true },
      { label: "Office 365 Online Login", href: "https://login.microsoftonline.com", external: true },
      { label: "Employee Lunch Menu", href: "https://www.specialtyproduce.com/editor/Employeemenu.php", external: true },
      { label: "Quarantined Emails", href: "https://security.microsoft.com/quarantine", external: true },
      { label: "Multi-Factor Authentication Setup", href: "https://aka.ms/MFASetup", external: true },
      { label: "Self-Service Windows Password Reset", href: "https://account.activedirectory.windowsazure.com/ChangePassword.aspx", external: true },
    ],
  },
];

export default function Home() {
  const handleDarkStopCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const invNum = formData.get("invNum");
    if (invNum) {
      window.open(`${BASE_URL}/include/darkstop.php?invNum=${invNum}`, "_blank");
    }
  };

  const handlePackerChecklist = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const username = formData.get("usernameP");
    const password = formData.get("passwordP");
    window.open(`${BASE_URL}/PackerChecklist/index.php?usernameP=${username}&passwordP=${password}`, "_blank");
  };

  const handleStatements = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const username = formData.get("usernameA");
    const password = formData.get("passwordA");
    window.open(`${BASE_URL}/Statements/index.php?usernameA=${username}&passwordA=${password}`, "_blank");
  };

  const handleCreditApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const username = formData.get("usernameA");
    const password = formData.get("passwordA");
    window.open(`${BASE_URL}/CreditApp/index.php?usernameA=${username}&passwordA=${password}`, "_blank");
  };

  return (
    <div className="p-4 lg:p-8">
      {/* Banner */}
      <div className="mb-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-secondary-900">SP Home</h1>
      </div>

      {/* IT Notices */}
      <div className="mb-6 space-y-4">
        {/* Elevate App Notice */}
        <div className="p-5 rounded-lg border-l-4 border-accent bg-secondary-200">
          <h3 className="font-bold text-secondary-900 mb-3">Elevate App for phone and desktop!</h3>
          <div className="text-sm text-secondary-800">
            <p className="mb-2">
              The desktop application will be automatically installed on your computer. If you see it has been installed, feel free to open it up.
            </p>
            <p className="mb-2">
              You will need to do the &quot;Forgot Password&quot; reset in order to get your password set up (sends a link to your email).
            </p>
            <p className="mb-3">
              After that, you can log in and be ready to take calls through your computer and headset.
            </p>
            <p className="font-semibold mb-2">If you will be using the app on your mobile device, here are the links to install it:</p>
            <div className="space-y-1">
              <Link 
                href="https://play.google.com/store/apps/details?id=net.serverdata.ringscape" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 hover:text-primary-900 underline block"
              >
                Google Play Store
              </Link>
              <Link 
                href="https://apps.apple.com/us/app/elevate-uc/id1118355431" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 hover:text-primary-900 underline block"
              >
                Apple App Store
              </Link>
            </div>
            <p className="mt-3 text-xs">
              If you have any issues, please contact IT.
            </p>
          </div>
        </div>

        {/* Data Security Notice */}
        <div className="p-5 rounded-lg border-l-4 border-primary-500 bg-primary-100">
          <h3 className="font-bold text-primary-900 mb-3">Data Security Setup</h3>
          <div className="text-sm text-primary-900 space-y-2">
            <p>
              To help secure corporate data while respecting your privacy, we are implementing security measures that protect only corporate data within Microsoft Apps you use on your personal device.
            </p>
            <p className="font-semibold">
              Your personal data, apps, and files will not be impacted.
            </p>
            <p>
              Please follow the instructions{" "}
              <Link 
                href="/docs/Security_Setup.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 hover:text-primary-900 underline font-semibold"
              >
                HERE
              </Link>{" "}
              to complete the setup.
            </p>
            <p>
              <span className="font-bold text-lg text-secondary-900">This is now live.</span>
              <br />
              If you were still using native email apps on your mobile device for company email, it will not work anymore.
            </p>
          </div>
        </div>
      </div>

      {/* Link Groups - Mobile Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6">
        {linkGroups.map((group) => (
          <Card key={group.title} hover>
            <CardHeader>
              <CardTitle className={`text-lg ${group.title === "Specialty Produce Website" ? "text-green-700" : ""}`}>
                {group.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-0">
                {group.links.map((link, index) => {
                  const isExternal = link.external || link.href.startsWith("http");
                  const fullUrl = getLinkUrl(link.href, isExternal);
                  const isEven = index % 2 === 0;
                  const bgColor = isEven ? "bg-transparent" : "bg-artist-2";
                  
                  if (isExternal) {
                    return (
                      <a
                        key={index}
                        href={fullUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block py-2 px-3 ${bgColor} hover:bg-artist-3 transition-colors ${
                          link.bold ? "font-bold" : ""
                        }`}
                      >
                        <span className="text-sm text-secondary-900 hover:text-secondary-700">
                          {link.label}
                        </span>
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={index}
                      href={link.href}
                      className={`block py-2 px-3 ${bgColor} hover:bg-artist-3 transition-colors ${
                        link.bold ? "font-bold" : ""
                      }`}
                    >
                      <span className="text-sm text-secondary-900 hover:text-secondary-700">
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Forms Section - Mobile Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6">
        {/* Dark Stop Check Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Dark Stop Check</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleDarkStopCheck} className="space-y-3">
              <Input
                name="invNum"
                id="invNum"
                placeholder="Invoice Number"
                className="w-full"
              />
              <Button type="submit" className="w-full">Check</Button>
            </form>
          </CardContent>
        </Card>

        {/* Packer Checklist Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Packer Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePackerChecklist} className="space-y-3">
              <Input
                name="usernameP"
                placeholder="Username"
                className="w-full"
              />
              <Input
                name="passwordP"
                type="password"
                placeholder="Password"
                className="w-full"
              />
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </CardContent>
        </Card>

        {/* Statements Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Statements</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleStatements} className="space-y-3">
              <Input
                name="usernameA"
                placeholder="Username"
                className="w-full"
              />
              <Input
                name="passwordA"
                type="password"
                placeholder="Password"
                className="w-full"
              />
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </CardContent>
        </Card>

        {/* Credit App Review Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Credit App Review</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreditApp} className="space-y-3">
              <Input
                name="usernameA"
                placeholder="Username"
                className="w-full"
              />
              <Input
                name="passwordA"
                type="password"
                placeholder="Password"
                className="w-full"
              />
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* HR Special Content - Mobile Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Uniform Login Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <p className="font-semibold mb-2">Login Information</p>
              <p>Username: Employee ID</p>
              <p>Password: SPEC2022 (SPEC is in all Caps)</p>
            </div>
            <div className="pt-3 border-t border-secondary-200">
              <p className="font-semibold mb-2">Informacion Entrar</p>
              <p>Usuario: ID de empleado</p>
              <p>Contrasena: SPEC2022 (SPEC ponlos en mayusculas)</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Office 365 Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <Link
              href="https://login.microsoftonline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary-600 hover:text-primary-700 underline"
            >
              Office 365 Online Login
            </Link>
            <p className="text-xs text-secondary-600 pt-2">
              For Pendry:<br />
              ordersnext@specialtyproduce.com / on5051
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Cloud PC Setup */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Cloud PC Setup and Login</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-3 text-sm text-secondary-700">
            <li>
              Double-click the Remote Desktop application icon on your Desktop.
            </li>
            <li>
              If you see <strong>Let&apos;s get started</strong>, then do the following:
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Click the button that says <span className="bg-gray-200 px-2 py-0.5 rounded">Subscribe with URL</span></li>
                <li>Use this URL: <em className="text-primary-600 break-all">https://rdweb.wvd.microsoft.com/api/arm/feeddiscovery</em></li>
                <li>Hit the <span className="bg-blue-600 text-white px-2 py-0.5 rounded">Next</span> button when it turns blue.</li>
                <li>Log into your regular user account, which will be your Specialty Produce email and your regular password, if needed</li>
                <li>You&apos;re registered! Move to step 3</li>
              </ul>
            </li>
            <li>
              Double-click the Cloud PC icon to launch your Cloud PC
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* Cloud PC Restart Instructions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Restart Cloud PC</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-secondary-700 mb-3">
            If you need to (or are told to) <strong>restart</strong> your Cloud PC:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-secondary-700">
            <li>Log into <Link href="https://windows365.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">windows365.microsoft.com</Link></li>
            <li>Click the little gear icon next to <strong>SP Access Users - ...</strong> to get the pop-up menu</li>
            <li>Click on &quot;Restart&quot; and confirm &quot;Restart&quot;.</li>
            <li>Wait about 3 minutes.</li>
            <li>You are good to go!</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}