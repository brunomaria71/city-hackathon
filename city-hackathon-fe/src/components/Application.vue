<template>
    <h1 class="text-5xl font-bold dark:text-white flex align-middle justify-center my-12">Application Summary</h1>
    <div class="w-full p-4 text-center text-gray-300 bg-gray-500 border border-gray-300 rounded-lg shadow sm:p-8 dark:text-gray-700 dark:bg-white dark:border-gray-200 my-10">
    <table class="min-w-full text-left text-sm font-light">
            <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" class="px-6 py-4"><strong>Full Name</strong></th>
                <th scope="col" class="px-6 py-4">Applicant ID</th>
                <th scope="col" class="px-6 py-4">Webinar Date</th>
                <th scope="col" class="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="whitespace-nowrap px-6 py-9 font-bold text-blue-500">
                    <p v-if="this.application.applicant_data">{{ this.application.applicant_data.name }}</p>    
                </td>
                <td class="whitespace-nowrap px-6 py-9">{{ this.application.applicant_ID }}</td>
                <td class="whitespace-nowrap px-6 py-9">{{ this.application.webinar_date?convertTimestampToString(this.application.webinar_date.seconds):"None" }}</td>
                <td class="whitespace-nowrap px-6 py-9">Phase {{ this.application.is_complete ?4:this.application.step>0?this.application.step: 1 }}</td>
              </tr>
            </tbody>
    </table>
    </div>
    <h2 class="text-4xl font-bold dark:text-white flex align-middle justify-center my-12">Application Details</h2>
    <div>
        <div v-for="(value, key) in this.application" :key="key"  >
            <div v-if="key !== 'applicant_data' && key !=='documentation' && key !== 'webinar_date'" class="flex flex-row justify-between my-6 px-9">
                <strong>{{ key.split("_").join(" ") }}</strong>
                <p>{{  value === null || value === undefined || value === ""?"invalid":value === true?"yes":value === false?"no":value }}</p>
            </div>
            <div v-if="key === 'documentation'" class="flex flex-row justify-between my-6 px-9">
                <strong>{{ key.split("_").join(" ") }}</strong>
                <p>{{countCompletedDocuments(value) }}/{{ this.application.documentation.length}}</p>
            </div>
            <div v-if="key === 'webinar_date'" class="flex flex-row justify-between my-6 px-9">
                <strong>{{ key.split("_").join(" ") }}</strong>
                <p v-if="this.application.webinar_date">{{ convertTimestampToString(this.application.webinar_date.seconds) }}</p>
            </div>
        </div>
    </div>

    <h2 class="text-4xl font-bold dark:text-white flex align-middle justify-center my-12">Applicant's Details</h2>
    <div>
        <div v-for="(value, key) in this.application.applicant_data" :key="key" class="flex flex-row justify-between my-6 px-9" >
            <strong>{{ key.split("_").join(" ") }}</strong>
            <p>{{  value === null || value === undefined || value === ""?"invalid":value === true?"yes":value === false?"no":value }}</p>
        </div>
    </div>

    <h2 class="text-4xl font-bold dark:text-white flex align-middle justify-center my-12">Applicant's Documents</h2>

    <div class="inline-block w-full">
        <div class="overflow-hidden">
          <table class="min-w-full text-left text-sm font-light">
            <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" class="px-6 py-4"><strong>Documents Required</strong></th>
                <th scope="col" class="px-6 py-4">Completed/Missing</th>
                <th scope="col" class="px-6 py-4">Date Updated</th>
                <th scope="col" class="px-6 py-4">Accepted</th>
                <th scope="col" class="px-6 py-4">Upload FIle</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for='document in this.application.documentation' :key="document.doc_id" class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-9 font-bold text-blue-500"> {{ document.doc_name }} </td>
                <td class="whitespace-nowrap px-6 py-9">{{ document.is_completed?"completed":"missing" }}</td>
                <td class="whitespace-nowrap px-6 py-9">{{ document.date_completed?document.date_completed:"invalid" }}</td>
                <td class="nowrap px-6 py-9">
                    <input
                        type="checkbox"
                        v-model="document.is_completed"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        @click="setDocumentApproval(document.doc_id, !document.is_completed)"
                        />
                </td>
                <td class="whitespace-nowrap px-6 py-9 font-bold text-blue-500">
                    <form action="/api" method="post" enctype="multipart/form-data">
                        <input id="file" name="file" type="file" />
                    </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Application',
  
    props: {
      applicationId: {
        type: String,
        required: true,
      },
    },
  
    data() {
      return {
        application: {},
        error: null,
      };
    },
  
    mounted() {
      this.getApplication();
    },
  
    watch: {
      applicationId: 'getApplication',
    },
  
    methods: {
      async getApplication() {
        try {
          const response = await fetch(`http://localhost:3000/fetch_application/${this.applicationId}`, {
            headers: {
              Accept: 'application/json',
            },
          });
          const data = await response.json();
          this.application = data.data;
        } catch (error) {
          console.error('Error fetching data:', error);
          alert('Error fetching data');
        }
      },
      async setDocumentApproval(document_id, is_submitted){
        const is_completed = is_submitted?"true":"false";
        try {
          const response = await fetch(`http://localhost:3000/updateDocuments/${this.applicationId}/${document_id}/${is_completed}`, {
            headers: {
              Accept: 'application/json',
            },
          });
          const data = await response.json();
          console.log(data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
          alert('Error fetching data');
        }
      },
       convertTimestampToString(seconds) {
        const date = new Date(seconds * 1000); // Convert seconds to milliseconds
        const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const dd = String(date.getDate()).padStart(2, '0');
        const yyyy = date.getFullYear();
        return `${mm}/${dd}/${yyyy}`;
        },
        countCompletedDocuments(documents) {
            let count = 0;
            for (const document of documents) {
                if (document.is_completed === true) {
                count++;
                }
            }
            return count;
            }
    },
  };
  </script>