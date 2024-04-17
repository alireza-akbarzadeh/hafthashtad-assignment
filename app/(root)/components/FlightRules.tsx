import { Alert, AlertDescription, Icon } from "components/index"

export const FlightRules = () => {
  return (
    <div className="space-y-4 p-4">
      <Alert className="flex items-center rounded-b-none rounded-t-xl bg-[#EAF1F8] p-[18px]">
        <div>
          <Icon name="Info" sizes="md" className="ml-2 text-[#696A6B]" />
        </div>
        <AlertDescription>
          <p className="text-xs font-normal leading-[18px] text-[#121516]">
            مسافرینی که قصد سفر به کشور مالزی را دارند، حتما می‌بایست بلیط رفت با ماکزیمم برگشت 45 روز به همراه داشته
            باشند، در غیر اینصورت از پذیرش مسافر در فرودگاه ممانعت به عمل خواهد آمد.
          </p>
        </AlertDescription>
      </Alert>
      <p className="text-xs font-normal leading-[18px] text-[#121516]">
        حضور مسافرین در فرودگاه ۴ ساعت قبل از پرواز ضروری میباشد، با توجه به رعایت کلیه پروتکل های بهداشتی در فرودگاه،
        کانترها از ۴ ساعت قبل پرواز باز خواهند بود و سیستمهای پذیرش مسافر طبق قوانین بین المللی ۱ ساعت قبل پرواز بصورت
        خودکار بسته شده ، بنابراین پس از آن از پذیرفتن مسافرین حتی در صورت حضور در ترمینال معذور خواهیم بود.
      </p>
      <p className="text-xs font-normal leading-[18px] text-[#121516]">
        کلیه مسافران پروازهای ورودی به ایران ملزم به دریافت گواهی سلامت و تست منفی کووید ۱۹ (PCR) به زبان انگلیسی مورد
        تایید وزارت بهداشت کشور مبدأ بوده، که حداکثر ۹۶ ساعت قبل از لحظه ورود به کشور ایران صادر شده و مسافر موظف است
        گواهی سلامت رو به نماینده بهداشت مرزی مستقر در فرودگاه تحویل دهد.مقررات فوق شامل افراد دارای کارت واکسن نیز
        میگردد .
      </p>
      <p className="text-xs font-normal leading-[18px] text-[#121516]">
        با توجه به شیوع ویروس کرونا و شرایط اعلامی تمامی ایرلاینها تا اطلاع ثانوی، مسافرانی که اقدام به سفر به کشورهای
        مختلف از ایران با ترانزیت یا بدون ترانزیت مینمایند، فقط با داشتن کارت اقامت یا پاسپورت همان کشور پذیرش میشوند و
        دارندگان انواع ویزا نیاز به بررسی مدارک و دریافت اوکی تو برد از سمت ایرلاین را دارند (clone)
      </p>
    </div>
  )
}
