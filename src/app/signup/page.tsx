'use client';

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MailIcon,
  LockIcon,
  PhoneIcon,
  LocationIcon,
  ChevronDownIcon,
  PalmLogo,
} from "@/components/icons";

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    country: 'Ghana',
    heritage_connection: '',
    other_heritage: '',
    terms_accepted: false,
    content_sharing_consent: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      heritage_connection: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success - redirect to login or dashboard
        router.push('/login?message=Account created successfully! Please log in.');
      } else {
        setError(data.error || 'Failed to create account');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left image panel */}
      <section className="relative hidden md:block">
        <Image
          src="/landingpage.png"
          alt="Canopy walkway in Ghana"
          fill
          priority
          quality={100}
          placeholder="empty"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-8 left-8 flex items-center gap-3 text-white">
          <div className="h-8 w-8 rounded-sm border border-white/30 bg-[#FFF3C4] flex items-center justify-center text-[#2F6C66]">
            <PalmLogo size={18} />
          </div>
          <span className="text-white/95 font-medium">OurRoots.Africa</span>
        </div>
        <div className="absolute bottom-12 left-8 right-8 text-white/95">
          <h2 className="text-2xl font-semibold">Embark on a Journey of Discovery.</h2>
          <p className="mt-3 max-w-md text-white/85">
            Connect with your heritage, explore the vibrant culture of Ghana, and uncover the
            stories that shape who you are.
          </p>
        </div>
      </section>

      {/* Right form panel */}
      <section className="flex items-center justify-center bg-[#F7F7F7] py-10">
        <div className="w-full max-w-[520px] px-6 md:px-10">
          <h1 className="text-[28px] leading-8 font-semibold text-[#2F6C66]">
            Create Your Heritage Account
          </h1>
          <p className="mt-2 text-[13px] text-[#8E98A4]">Start your personalized journey today.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <div className="flex items-center rounded-md border border-[#E5E7EB] bg-white shadow-sm">
                <span className="px-3 text-[#A2ACB6]">
                  <MailIcon />
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full py-2.5 pr-3 outline-none placeholder:text-[#9CA3AF] text-black caret-black"
                />
              </div>
            </div>
            {/* Password */}
            <div>
              <div className="flex items-center rounded-md border border-[#E5E7EB] bg-white shadow-sm">
                <span className="px-3 text-[#A2ACB6]">
                  <LockIcon />
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  minLength={6}
                  className="w-full py-2.5 pr-3 outline-none placeholder:text-[#9CA3AF] text-black caret-black"
                />
              </div>
            </div>
            {/* Phone */}
            <div>
              <div className="flex items-center rounded-md border border-[#E5E7EB] bg-white shadow-sm">
                <span className="px-3 text-[#A2ACB6]">
                  <PhoneIcon />
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (WhatsApp)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full py-2.5 pr-3 outline-none placeholder:text-[#9CA3AF] text-black caret-black"
                />
              </div>
            </div>
            {/* Country Select */}
            <div>
              <div className="flex items-center rounded-md border border-[#E5E7EB] bg-white shadow-sm">
                <span className="px-3 text-[#A2ACB6]">
                  <LocationIcon />
                </span>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full py-2.5 pr-10 bg-transparent outline-none text-black caret-black"
                >
                  <option value="Ghana">Ghana</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Kenya">Kenya</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                </select>
                <span className="px-3 text-[#A2ACB6]">
                  <ChevronDownIcon />
                </span>
              </div>
              <p className="mt-1 text-[11px] text-[#9AA5B1]">For PPP pricing adjustment</p>
            </div>

            {/* Heritage Connection */}
            <div className="pt-2">
              <label className="block text-[13px] font-semibold text-[#2F3A4A]">
                Heritage Connection
              </label>
              <div className="mt-2 space-y-2 text-[13px] text-[#4B5563]">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="heritage" 
                    checked={formData.heritage_connection === 'Ghanaian diaspora'}
                    onChange={() => handleRadioChange('Ghanaian diaspora')}
                  /> 
                  Ghanaian diaspora
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="heritage" 
                    checked={formData.heritage_connection === 'African American'}
                    onChange={() => handleRadioChange('African American')}
                  /> 
                  African American
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="heritage" 
                    checked={formData.heritage_connection === 'Caribbean heritage'}
                    onChange={() => handleRadioChange('Caribbean heritage')}
                  /> 
                  Caribbean heritage
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="heritage" 
                    checked={formData.heritage_connection === 'Cultural enthusiast'}
                    onChange={() => handleRadioChange('Cultural enthusiast')}
                  /> 
                  Cultural enthusiast
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="heritage" 
                      checked={formData.heritage_connection === 'Other'}
                      onChange={() => handleRadioChange('Other')}
                    /> 
                    Other:
                  </label>
                  <input
                    type="text"
                    name="other_heritage"
                    value={formData.other_heritage}
                    onChange={handleInputChange}
                    placeholder="Specify..."
                    className="flex-1 rounded-md border border-[#E3E6EA] bg-white py-2 px-3 text-[13px] outline-none text-black caret-black"
                  />
                </div>
              </div>
            </div>

            {/* Agreements */}
            <div className="space-y-2 text-[13px] text-[#4B5563]">
              <label className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  name="terms_accepted"
                  checked={formData.terms_accepted}
                  onChange={handleInputChange}
                  required
                  className="mt-0.5" 
                /> 
                I agree to Terms & Cultural Guidelines
              </label>
              <label className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  name="content_sharing_consent"
                  checked={formData.content_sharing_consent}
                  onChange={handleInputChange}
                  className="mt-0.5" 
                /> 
                I consent to Traditional Knowledge
                Board content sharing protocols
              </label>
            </div>

            {/* CTA */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 w-full rounded-md bg-[#F0AE3F] hover:bg-[#E8A63A] disabled:bg-gray-400 py-3 text-white font-medium shadow-sm text-center"
            >
              {isLoading ? 'Creating Account...' : 'Create Account & Start Journey →'}
            </button>

            {/* Pricing box */}
            <div className="mt-4 rounded-md border border-[#E5E7EB] bg-white p-4 text-[13px] text-[#4B5563]">
              <div className="flex items-center gap-2 text-[#2F6C66]">
                <span>🏷️</span> Your pricing: $9/month (Ghana rate)
              </div>
              <div className="mt-1 text-[#8E98A4]">Upgrade anytime to premium features</div>
            </div>

            <p className="mt-4 text-center text-[13px] text-[#7E8893]">
              Already have an account?{" "}
              <a href="/login" className="text-[#2F6C66] hover:underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
