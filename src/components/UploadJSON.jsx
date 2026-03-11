import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

export default function UploadJSON() {
  const { setFormDataPayload } = useContext(DataContext);
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [activeSection, setActiveSection] = useState(1);

  const [formData, setFormData] = useState({
    batch_id: "",
    granulation_time: "18",
    machine_speed: "150",
    compression_force: "12.5",
    drying_temp: "60",
    drying_time: "25",
    binder_amount: "8.5",
    lubricant_conc: "1.0",
    tablet_weight: "200",
    moisture_content: "2.1",
    room_temperature: "22",
    room_humidity: "45",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload the sensor JSON file.");
      return;
    }

    const payload = new FormData();
    payload.append("sensor_file", file);
    Object.keys(formData).forEach((key) => {
      payload.append(key, formData[key]);
    });

    setFormDataPayload(payload);
    navigate("/dashboard");
  };

  const sections = [
    { id: 1, name: "Machine Settings", icon: "⚙️" },
    { id: 2, name: "Material Properties", icon: "🧪" },
    { id: 3, name: "Environmental", icon: "🌡️" },
    { id: 4, name: "Sensor Data", icon: "📊" },
  ];

  return (
    <div className="w-full">
      {/* Progress Steps - Nice orientation */}
      <div className="flex justify-between mb-12">
        {sections.map((section) => (
          <div key={section.id} className="flex items-center flex-1 last:flex-none">
            <div className="relative">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 cursor-pointer
                  ${activeSection >= section.id 
                    ? 'border-black bg-black text-white' 
                    : 'border-gray-200 bg-white text-gray-400'}`}
                onClick={() => setActiveSection(section.id)}
              >
                <span className="text-lg">{section.icon}</span>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className={`text-xs ${activeSection >= section.id ? 'text-black font-medium' : 'text-gray-400'}`}>
                  {section.name}
                </span>
              </div>
            </div>
            {section.id < sections.length && (
              <div className={`flex-1 h-0.5 mx-4 transition-colors duration-300 ${activeSection > section.id ? 'bg-black' : 'bg-gray-200'}`}></div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section 1: Machine Settings */}
        <div className={activeSection === 1 ? 'block' : 'hidden'}>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-lg font-medium mb-6 text-gray-900">Machine Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Batch ID", name: "batch_id", type: "text", placeholder: "BATCH-001" },
                { label: "Granulation Time (min)", name: "granulation_time", type: "number" },
                { label: "Machine Speed (RPM)", name: "machine_speed", type: "number" },
                { label: "Compression Force (kN)", name: "compression_force", type: "number" },
                { label: "Drying Temp (°C)", name: "drying_temp", type: "number" },
                { label: "Drying Time (min)", name: "drying_time", type: "number" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm text-gray-600 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.name === "batch_id"}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={() => setActiveSection(2)}
              className="px-8 py-3 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors"
            >
              Next Step →
            </button>
          </div>
        </div>

        {/* Section 2: Material Properties */}
        <div className={activeSection === 2 ? 'block' : 'hidden'}>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-lg font-medium mb-6 text-gray-900">Material Properties</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Binder Amount (g)", name: "binder_amount" },
                { label: "Lubricant Conc (%)", name: "lubricant_conc" },
                { label: "Tablet Weight (mg)", name: "tablet_weight" },
                { label: "Moisture Content (%)", name: "moisture_content" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm text-gray-600 mb-2">
                    {field.label}
                  </label>
                  <input
                    type="number"
                    step="any"
                    name={field.name}
                    required
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => setActiveSection(1)}
              className="px-8 py-3 border border-gray-200 text-sm rounded-full hover:border-gray-400 transition-colors"
            >
              ← Previous
            </button>
            <button
              type="button"
              onClick={() => setActiveSection(3)}
              className="px-8 py-3 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors"
            >
              Next Step →
            </button>
          </div>
        </div>

        {/* Section 3: Environmental */}
        <div className={activeSection === 3 ? 'block' : 'hidden'}>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-lg font-medium mb-6 text-gray-900">Environmental Conditions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Room Temperature (°C)", name: "room_temperature" },
                { label: "Room Humidity (%)", name: "room_humidity" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm text-gray-600 mb-2">
                    {field.label}
                  </label>
                  <input
                    type="number"
                    step="any"
                    name={field.name}
                    required
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => setActiveSection(2)}
              className="px-8 py-3 border border-gray-200 text-sm rounded-full hover:border-gray-400 transition-colors"
            >
              ← Previous
            </button>
            <button
              type="button"
              onClick={() => setActiveSection(4)}
              className="px-8 py-3 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors"
            >
              Next Step →
            </button>
          </div>
        </div>

        {/* Section 4: Sensor Data Upload */}
        <div className={activeSection === 4 ? 'block' : 'hidden'}>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
            <h3 className="text-lg font-medium mb-6 text-gray-900">Upload Sensor Data</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 bg-white">
              <input
                type="file"
                accept=".json"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer block"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-gray-900 mb-2 font-medium">
                  {file ? file.name : "Click to upload JSON file"}
                </p>
                <p className="text-sm text-gray-400">
                  {file ? `${(file.size / 1024).toFixed(2)} KB` : "JSON format only"}
                </p>
              </label>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => setActiveSection(3)}
              className="px-8 py-3 border border-gray-200 text-sm rounded-full hover:border-gray-400 transition-colors"
            >
              ← Previous
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors"
            >
              Analyze Batch →
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}