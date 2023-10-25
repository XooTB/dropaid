type hookProps = {
  image1: string;
  image2: string;
  description: string;
  boxItems: string;
  titles: string[];
  specs: {
    category: string;
    value: string;
  }[];
};

const useGenerateDesc = (data: hookProps) => {
  const { image1, image2, description, titles, boxItems, specs } = data;

  const contents = boxItems.split(", ").map((item) => {
    return `<li>${item}</li>`;
  });

  const specifications = specs.map(
    (spec) => `
    <tr class="border border-black rounded-sm">
    <td class="px-4 py-2 bg-gray-200">${spec.category}</td>
    <td class="px-4 py-2 border-l border-black">${spec.value}</td>
  </tr>
`
  );

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
      .container,.mx-auto{margin-right:auto;margin-left:auto}.mt-8,.my-8{margin-top:2rem}.py-4{padding-top:1rem;padding-bottom:1rem}.text-white{color:#fff}.container,.w-full{width:100%}.w-1\/2{width:50%}.h-auto{height:auto}.pl-4{padding-left:1rem}.text-3xl{font-size:1.875rem}.text-gray-600{color:#718096}.text-sm{font-size:.875rem}.my-8{margin-bottom:2rem}.border-t{border-top:1px solid #e5e7eb}.border-gray-300{border-color:#d1d5db}.mt-4{margin-top:1rem}.mb-4{margin-bottom:1rem}.bg-gray-200{background-color:#e5e7eb}.px-3{padding-left:.75rem;padding-right:.75rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.list-disc{list-style-type:disc}.bg-blue-500{background-color:#3b82f6}.rounded-md{border-radius:.375rem}.pb-10{padding-bottom:2.5rem}.table-auto{table-layout:auto}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.grid{display:grid}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.gap-1{gap:.25rem}.rounded-sm{border-radius:.125rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.rounded-lg{border-radius:.5rem}.font-bold{font-weight:700}.flex{display:flex}.border{border:1px solid #000}.border-l{border-left:1px solid}.border-black{border-color:#000}.head-text:hover{color:#ff0}.head-text{text-decoration:none;color:#fff;padding-left:10px}.text-2xl{font-size:1.5rem}.mb-2{margin-bottom:.5rem}
      </style>
    </head>
    <body>
      <header class="bg-blue-500 py-4 text-white">
        <div class="container mx-auto flex items-center justify-between">
          <h1 class="text-2xl font-bold">
            <a href="https://www.ebay.com/usr/potrika_deals" class="head-text"
              >Visit Our EBAY store</a
            >
          </h1>
        </div>
      </header>
      <main class="container mx-auto mt-8 pb-10">
        <div class="flex flex-wrap">
          <div class="w-1/2">
            <img
              src="${image1}"
              alt="Product Image"
              class="w-full h-auto"
            />
          </div>
          <div class="w-1/2 pl-4 py-5">
            <h2 class="text-3xl font-bold mb-2">${titles[1]}</h2>
            <p class="text-gray-600 text-sm">Condition: New</p>
          </div>
        </div>
        <hr class="my-8 border-t border-gray-300" />
        <section class="mt-4 mb-4">
          <h2
            class="text-2xl font-semibold mb-4 bg-gray-200 px-3 py-1 rounded-lg"
          >
            What's in the Box
          </h2>
          <ul class="list-disc px-10">
            ${contents}
          </ul>
        </section>
        <hr class="my-8 border-t border-gray-300" />
        <section class="mt-8">
          <div class="flex flex-wrap">
            <div class="w-1/2">
              <img
                src="${image2}"
                alt="Product Image 2"
                class="w-full h-auto"
              />
            </div>
            <div class="w-1/2 pl-4">
              <h2
                class="text-3xl font-bold mb-2 bg-blue-500 text-white px-3 py-1 rounded-md"
              >
                ${titles[2]}
              </h2>
              <p class="text-gray-600 text-sm pb-10">
                ${description}
              </p>
  
              <!-- Specification Table -->
              <table class="table-auto">
                <tbody class="py-5 grid grid-cols-2 gap-1">
                  ${specifications.join("")}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <hr class="my-8 border-t border-gray-300" />
        <section class="mt-8">
          <h2
            class="text-2xl font-semibold mb-4 bg-gray-200 px-10 py-2 rounded-lg"
          >
            Shipping Information
          </h2>
          <p class="text-gray-600 text-sm font-bold px-10">
            Shipping Policy: Greater China to USA. ~30 Day Shipping
          </p>
          <p class="px-10">
            1. Shipping Method: We provide an estimated 30-day shipping service
            from Greater China to the USA.
            <br />
            2. Shipping Costs: Most of our products are shipped free of charge.
            Please check details before ordering
          </p>
        </section>
      </main>
    </body>
  </html>
    `;
};

export default useGenerateDesc;
