import React from "react";
import {
  Content,
  ServiceBoxHeading,
  ServiceBoxParagraph,
  ServiceLogo1,
  ServiceLogo2,
  ServiceLogo3,
  ServiceLogo4,
  ServicesBox,
} from "../../styles/styled";

const ServicesText: React.FC = () => {
  return (
    <Content data-testid="services-text">
      <ServicesBox>
        <ServiceLogo1 data-testid="service-logo-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M20.9949 9.3301V1.33787C20.9949 0.922516 20.8094 0.550887 20.5172 0.306048C20.4527 0.253583 20.3838 0.205489 20.3111 0.161768C20.1256 0.0612096 19.9105 0 19.6824 0H1.31245C0.589526 0 0 0.59898 0 1.33787V34.6665C0 35.405 0.589526 36 1.31245 36H19.6824C20.4096 36 20.9953 35.4054 20.9953 34.6665V24.8642H19.1364V29.4987H1.85894V2.16857H19.1359V9.3301H20.9949ZM10.4953 30.666C11.5409 30.666 12.3843 31.5273 12.3843 32.5858C12.3843 33.6439 11.5409 34.5008 10.4953 34.5008C9.45393 34.5008 8.61052 33.6439 8.61052 32.5858C8.61052 31.5273 9.45393 30.666 10.4953 30.666Z"
              fill="#6153CD"
            />
            <path
              d="M14.3506 15.8316V21.782C14.3506 22.3019 13.9375 22.726 13.4254 22.726H7.56888C7.05681 22.726 6.6394 22.3019 6.6394 21.782V15.8316C6.6394 15.3113 7.05681 14.8872 7.56888 14.8872H13.4254C13.9375 14.8872 14.3506 15.3113 14.3506 15.8316Z"
              fill="#6153CD"
            />
            <path
              d="M36.0001 6.2959V14.1132C36.0001 14.7997 35.4532 15.3549 34.7823 15.3549H30.7762V11.8616C30.7762 10.4669 29.6573 9.33015 28.2847 9.33015H25.8706V6.2959C25.8706 5.61385 26.4171 5.05859 27.0884 5.05859H34.7823C35.4536 5.05859 36.0001 5.61385 36.0001 6.2959Z"
              fill="#6153CD"
            />
            <path
              d="M29.915 11.8616V19.95H26.9846C25.9992 19.95 25.1988 20.7676 25.1988 21.7688V23.9899H17.9782C17.0745 23.9899 16.3473 23.251 16.3473 22.3328V11.8616C16.3473 10.9478 17.0745 10.2046 17.9782 10.2046H28.2841C29.1835 10.2046 29.915 10.9478 29.915 11.8616Z"
              fill="#6153CD"
            />
            <path
              d="M33.7664 21.7686V27.719C33.7664 28.2393 33.3533 28.6634 32.8413 28.6634H26.9847C26.4727 28.6634 26.0596 28.2393 26.0596 27.719V21.7686C26.0596 21.2483 26.4727 20.8242 26.9847 20.8242H32.8413C33.3533 20.8242 33.7664 21.2483 33.7664 21.7686Z"
              fill="#6153CD"
            />
          </svg>
        </ServiceLogo1>
        <ServiceBoxHeading>App Development</ServiceBoxHeading>
        <ServiceBoxParagraph>
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
          metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus
        </ServiceBoxParagraph>
      </ServicesBox>
      <ServicesBox>
        <ServiceLogo2 data-testid="service-logo-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M34.8657 24.2306C36.3791 20.2146 36.3791 15.7851 34.8657 11.7691C34.8441 11.6876 34.8149 11.6084 34.7784 11.5324C33.4711 8.14217 31.1691 5.22657 28.1746 3.16842C25.1802 1.11027 21.6334 0.00578651 17.9998 0H17.9915C14.3554 0.00770442 10.8068 1.11552 7.81207 3.1778C4.81738 5.24008 2.51683 8.16029 1.21287 11.5545C1.18641 11.6128 1.1642 11.673 1.14641 11.7345C-0.382135 15.7716 -0.382135 20.2281 1.14641 24.2652C1.1642 24.3267 1.18641 24.3869 1.21287 24.4452C2.51137 27.8426 4.81021 30.7661 7.80558 32.8293C10.801 34.8924 14.3518 35.9981 17.989 36.0002C21.6261 36.0023 25.1783 34.9007 28.176 32.841C31.1738 30.7813 33.476 27.8605 34.7784 24.4646C34.8147 24.3895 34.8439 24.3111 34.8657 24.2306ZM13.3406 22.4583C12.7092 19.5195 12.7092 16.4802 13.3406 13.5414H22.659C23.2904 16.4802 23.2904 19.5195 22.659 22.4583H13.3406ZM21.9002 25.2275C21.0029 27.8409 19.6855 30.2906 17.9998 32.4801C16.3165 30.2899 15.001 27.8404 14.1049 25.2275H21.9002ZM2.76916 17.9999C2.77042 16.4884 2.9977 14.9857 3.44346 13.5414H10.5202C9.9645 16.4877 9.9645 19.512 10.5202 22.4583H3.44346C2.9977 21.0141 2.77042 19.5113 2.76916 17.9999ZM14.1049 10.7722C15.0032 8.15891 16.321 5.70932 18.0067 3.51966C19.69 5.7096 21.005 8.15923 21.9002 10.7722H14.1049ZM25.4905 13.5414H32.5672C33.4608 16.4466 33.4608 19.5532 32.5672 22.4583H25.4836C26.0411 19.5121 26.0411 16.4876 25.4836 13.5414H25.4905ZM31.4083 10.7722H24.8314C24.0059 8.03696 22.7581 5.44745 21.1332 3.09736C23.2984 3.5566 25.3381 4.48076 27.111 5.80592C28.884 7.13108 30.3479 8.82559 31.4014 10.7722H31.4083ZM14.8665 3.09736C13.241 5.44735 11.9928 8.03687 11.1668 10.7722H4.59684C5.65045 8.82538 7.11452 7.13072 8.88772 5.80555C10.6609 4.48037 12.7009 3.55633 14.8665 3.09736ZM4.59684 25.2275H11.1668C11.9928 27.9628 13.241 30.5524 14.8665 32.9024C12.7009 32.4434 10.6609 31.5193 8.88772 30.1942C7.11452 28.869 5.65045 27.1743 4.59684 25.2275ZM21.1332 32.9024C22.7581 30.5523 24.0059 27.9628 24.8314 25.2275H31.4014C30.3479 27.1741 28.884 28.8686 27.111 30.1938C25.3381 31.519 23.2984 32.4431 21.1332 32.9024Z"
              fill="#6854FC"
            />
          </svg>
        </ServiceLogo2>
        <ServiceBoxHeading>Web Designing</ServiceBoxHeading>
        <ServiceBoxParagraph>
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
          metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus
        </ServiceBoxParagraph>
      </ServicesBox>
      <ServicesBox>
        <ServiceLogo3 data-testid="service-logo-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="35"
            viewBox="0 0 38 35"
            fill="none"
          >
            <path
              d="M36.8125 0H32.0625C31.7476 0 31.4455 0.125111 31.2228 0.347811C31.0001 0.57051 30.875 0.872555 30.875 1.1875V2.375H22.5625V1.1875C22.5625 0.872555 22.4374 0.57051 22.2147 0.347811C21.992 0.125111 21.6899 0 21.375 0H16.625C16.3101 0 16.008 0.125111 15.7853 0.347811C15.5626 0.57051 15.4375 0.872555 15.4375 1.1875V2.375H7.125V1.1875C7.125 0.872555 6.99989 0.57051 6.77719 0.347811C6.55449 0.125111 6.25244 0 5.9375 0H1.1875C0.872555 0 0.57051 0.125111 0.347811 0.347811C0.125111 0.57051 0 0.872555 0 1.1875L0 5.9375C0 6.25244 0.125111 6.55449 0.347811 6.77719C0.57051 6.99989 0.872555 7.125 1.1875 7.125H5.9375C6.25244 7.125 6.55449 6.99989 6.77719 6.77719C6.99989 6.55449 7.125 6.25244 7.125 5.9375V4.75H15.4375V5.9375C15.4375 6.25244 15.5626 6.55449 15.7853 6.77719C16.008 6.99989 16.3101 7.125 16.625 7.125H21.375C21.6899 7.125 21.992 6.99989 22.2147 6.77719C22.4374 6.55449 22.5625 6.25244 22.5625 5.9375V5.10625C25.9112 5.9375 31.6112 8.91813 32.0625 19H30.875C30.5601 19 30.258 19.1251 30.0353 19.3478C29.8126 19.5705 29.6875 19.8726 29.6875 20.1875V24.9375C29.6875 25.2524 29.8126 25.5545 30.0353 25.7772C30.258 25.9999 30.5601 26.125 30.875 26.125H35.625C35.9399 26.125 36.242 25.9999 36.4647 25.7772C36.6874 25.5545 36.8125 25.2524 36.8125 24.9375V20.1875C36.8125 19.8726 36.6874 19.5705 36.4647 19.3478C36.242 19.1251 35.9399 19 35.625 19H34.4375C34.1406 11.0675 30.875 6.91125 27.5025 4.75H30.875V5.9375C30.875 6.25244 31.0001 6.55449 31.2228 6.77719C31.4455 6.99989 31.7476 7.125 32.0625 7.125H36.8125C37.1274 7.125 37.4295 6.99989 37.6522 6.77719C37.8749 6.55449 38 6.25244 38 5.9375V1.1875C38 0.872555 37.8749 0.57051 37.6522 0.347811C37.4295 0.125111 37.1274 0 36.8125 0ZM4.75 4.75H2.375V2.375H4.75V4.75ZM20.1875 4.75H17.8125V2.375H20.1875V4.75ZM32.0625 21.375H34.4375V23.75H32.0625V21.375ZM35.625 4.75H33.25V2.375H35.625V4.75Z"
              fill="#6854FC"
            />
            <path
              d="M11.7442 8.96541C11.6457 8.76781 11.4941 8.60157 11.3063 8.48537C11.1186 8.36917 10.9022 8.30762 10.6814 8.30762C10.4606 8.30762 10.2442 8.36917 10.0564 8.48537C9.8687 8.60157 9.71707 8.76781 9.61858 8.96541L2.49358 23.2154C2.38371 23.4381 2.34638 23.6895 2.38686 23.9345C2.42733 24.1795 2.54356 24.4056 2.71921 24.581L4.33421 26.196C4.10692 26.281 3.9111 26.4335 3.7731 26.633C3.6351 26.8326 3.56154 27.0697 3.56233 27.3123V29.6873C3.56233 30.0022 3.68744 30.3043 3.91014 30.527C4.13284 30.7497 4.43489 30.8748 4.74983 30.8748H5.93733V34.4373H8.31233V30.8748H13.0623V34.4373H15.4373V30.8748H16.6248C16.9398 30.8748 17.2418 30.7497 17.4645 30.527C17.6872 30.3043 17.8123 30.0022 17.8123 29.6873V27.3123C17.8098 27.0703 17.7334 26.8348 17.5933 26.6374C17.4532 26.4401 17.2562 26.2902 17.0286 26.2079L18.6436 24.5929C18.8192 24.4174 18.9355 24.1913 18.9759 23.9464C19.0164 23.7014 18.9791 23.4499 18.8692 23.2273L11.7442 8.96541ZM13.763 26.1248H7.61171L4.99921 23.5123L9.49983 14.5348V21.3748H11.8748V14.5348L16.3636 23.5242L13.763 26.1248Z"
              fill="#6854FC"
            />
          </svg>
        </ServiceLogo3>
        <ServiceBoxHeading>Graphic Designing</ServiceBoxHeading>
        <ServiceBoxParagraph>
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
          metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus
        </ServiceBoxParagraph>
      </ServicesBox>
      <ServicesBox>
        <ServiceLogo4 data-testid="service-logo-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="36"
            viewBox="0 0 37 36"
            fill="none"
          >
            <path
              d="M27.9502 2.78793L26.6015 4.13665C26.3922 4.35703 26.0017 4.37847 25.7601 4.13665C25.5272 3.90397 25.5272 3.52793 25.7601 3.29525L27.1088 1.94654C27.3415 1.71378 27.7175 1.71378 27.9561 1.94654C28.1889 2.17928 28.1889 2.55526 27.9502 2.78793Z"
              fill="#6854FC"
            />
            <path
              d="M29.8957 6.92335C29.8838 7.24563 29.6212 7.4963 29.2989 7.4963H29.275L27.3714 7.41864C27.0431 7.4008 26.7865 7.12623 26.7985 6.79208C26.8104 6.47577 27.073 6.2251 27.3953 6.2251H27.4192L29.3228 6.30275C29.6571 6.3147 29.9077 6.59517 29.8957 6.92335Z"
              fill="#6854FC"
            />
            <path
              d="M23.5931 0.573766L23.6708 2.47751C23.6887 2.8057 23.432 3.08616 23.1038 3.09811H23.074C22.7577 3.09811 22.4951 2.84751 22.4832 2.52523L22.3996 0.621554C22.3877 0.2933 22.6443 0.0128342 22.9725 0.000884331C23.3067 -0.0170375 23.5812 0.239609 23.5931 0.573766Z"
              fill="#6854FC"
            />
            <path
              d="M19.7904 15.9361L13.9608 10.1071L14.7512 5.24039L24.659 15.1482L19.7904 15.9361ZM26.8627 14.7913L26.1119 14.9128L14.9871 3.78852L15.1091 3.03689C15.1871 2.55663 15.7762 2.36652 16.1202 2.71056L27.1894 13.7802C27.5335 14.1244 27.3431 14.7136 26.8627 14.7913ZM24.4364 5.4652C25.5909 6.6197 25.7168 8.41935 24.8158 9.71838L20.1786 5.08114C21.4782 4.18131 23.2802 4.30953 24.4364 5.4652ZM10.4046 21.3409C9.89528 21.8497 9.0654 21.8508 8.55604 21.3409C8.0461 20.831 8.0461 20.0017 8.55604 19.4917L9.48501 18.5628C9.54477 18.6225 11.4523 20.5296 11.3341 20.4114L10.4046 21.3409ZM13.3815 20.7709C11.9778 19.3674 10.6991 18.0889 9.12542 16.5154C8.80606 16.1961 8.80606 15.6756 9.12542 15.3557L13.3238 11.1579L18.7391 16.5731C13.0289 22.2824 20.1832 15.1292 14.5407 20.7709C14.2306 21.0804 13.6921 21.0816 13.3815 20.7709ZM23.068 23.83C22.6961 23.458 24.6211 25.3867 18.1207 18.8768C17.6552 19.3422 16.3244 20.6731 16.2648 20.7328L21.218 25.68C21.7253 26.1933 22.5547 26.1933 23.068 25.68C23.5812 25.1727 23.5812 24.3373 23.068 23.83Z"
              fill="#6854FC"
            />
            <path
              d="M0 31.1211V32.266C0 33.8618 1.2952 35.157 2.89108 35.157H34.1089C35.7048 35.157 37 33.8618 37 32.266V31.1211C35.9658 31.1211 42.3827 31.1211 0 31.1211Z"
              fill="#6854FC"
            />
            <path
              d="M33.8103 8.26025H26.5773C26.5058 9.00622 26.2491 9.74629 25.7956 10.3967L25.6762 10.5757L26.3446 11.2441H32.5809V26.9453H23.3488C22.6193 27.3519 21.6936 27.3664 20.9378 26.9453H4.41917V11.2441H11.5446L12.7621 10.0268L13.0485 8.26025H3.18978C2.22302 8.26025 1.4353 9.04206 1.4353 10.0088V29.9292H35.5648V10.0088C35.5648 9.04206 34.777 8.26025 33.8103 8.26025Z"
              fill="#6854FC"
            />
          </svg>
        </ServiceLogo4>
        <ServiceBoxHeading>Digital Marketing</ServiceBoxHeading>
        <ServiceBoxParagraph>
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
          metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus
        </ServiceBoxParagraph>
      </ServicesBox>
    </Content>
  );
};
export default ServicesText;