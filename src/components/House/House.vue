<template>
  <div class="info">
    <div class="subject">
        <div class="count">{{watchIndex}}/8</div>
        <swiper :options="option1">
            <swiper-slide class="benefitBox" v-for="(item, index) in 8" :key="index">
                <div class="avatar">
                    <img src="static/img/资源5.png"  alt="">
                </div>
            </swiper-slide>
        </swiper>  
        <div class="subject_body">
            <div class="subject_body_bottom">
                <el-row :gutter="20">
                    <el-col :span="16" >
                      <el-row :gutter="10">
                            <el-col :span="16">
                                <div class="subject_body_div1_one">四室两厅两位-风碗</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="subject_body_div1_two">
                                    <div>在售</div>
                                </div>
                            </el-col>  
                      </el-row>
                 
                    </el-col>

                    <el-col :span="8">
                        
                        <div style="font-size: 0.8rem">
                            <i class="el-icon-date"></i>
                            算月供
                        </div>
                    </el-col>

                </el-row>
           
            </div>
            <div class="subject_body_bottom">
                <el-row>
                    <el-col :span="24">
                        <div class="subject_body_div2_one">总价约为<span class="subject_body_div2_two">104</span>万元 
                                      <span class="subject_body_div2_three">单价约为8000/㎡</span>          
                        </div>
                    </el-col>
                   
                </el-row>

            </div>
            <div style="margin-top: 0.8rem">
                 <el-row>
                    <el-col :span="24">
                        <div class="subject_body_div3_one">
                            <div class="subject_body_div3_one_span_one">大面宽阳台</div>   
                            <div class="subject_body_div3_one_span_two">U型厨房</div> 
                            <div class="subject_body_div3_one_span_three">光景飘窗</div>
                            <div class="subject_body_div3_one_span_four">户型方正</div>    
                            <!-- <el-row :gutter="10">
                                 <el-col :span="6">
                                    <div class="subject_body_div3_one_span_one">大面宽阳台</div>    
                                 </el-col>
                                 <el-col :span="5">
                                    <div class="subject_body_div3_one_span_two">U型厨房</div>
                                 </el-col>
                                 <el-col :span="5">
                                     <div class="subject_body_div3_one_span_three">光景飘窗</div>       
                                 </el-col> 
                                 <el-col :span="5">
                                     <div class="subject_body_div3_one_span_four">户型方正</div>
                                 </el-col>   
                            </el-row> -->
                        </div>
                        
                    </el-col>   
                   
                 </el-row>   
                
            </div>
            <div class="subject_body_Horizontalline"></div>
            <div class="subject_body_two">
                <div class="subject_body_two_margin">
                     <el-row>
                        <el-col :span="4" class="subject_body_two_right">
                            物业类型
                        </el-col>
                        <el-col :span="20" class="subject_body_two_left">
                            4室二厅二卫    
                        </el-col>

                    </el-row>

                </div>
                 <div class="subject_body_two_margin">
                     <el-row>
                        <el-col :span="4" class="subject_body_two_right">
                            建筑面积
                        </el-col>
                        <el-col :span="20" class="subject_body_two_left">
                            131㎡    
                        </el-col>

                    </el-row>

                </div>
                <div class="subject_body_two_margin">
                     <el-row>
                        <el-col :span="4" class="subject_body_two_right">
                            所属楼栋
                        </el-col>
                        <el-col :span="20" class="subject_body_two_left">
                            2#、3#、4#、5#、6#    
                        </el-col>

                    </el-row>

                </div>
                 <div class="subject_body_two_margin">
                     <el-row>
                        <el-col :span="4" class="subject_body_two_right">
                            所属楼盘
                        </el-col>
                        <el-col :span="20" class="subject_body_two_left_four">
                            西城区-三巽国建风华
                        </el-col>

                    </el-row>

                </div>
                
            </div>
            
            <div class="subject_body_three">
                <h2>户型解析</h2>
                <el-row>
                    <el-col :span="3">
                        <img src="static/img/资源1.png" title=""/>
                    </el-col>
                    <el-col :span="21">
                        <div>阔景阳台，尽收眼底</div>    
                    </el-col>
                </el-row>
            </div>
            <div class="subject_body_Horizontalline_two"></div>
            <div class="subject_body_four">
                <el-row>
                    <el-col :span="12">
                        <h2>本楼盘其他户型</h2>
                    </el-col>
                    <el-col :span="12">
                         <div class="subject_body_four_div">更多户型<i class="el-icon-arrow-right"></i></div>   
                    </el-col>
                </el-row>

            </div>
            <div class="subject_body_five">
                <el-row :gutter="10">
                    <el-col :span="12">
                        <el-image :src="'static/img/资源3.png'">

                        </el-image>
                        <div class="subject_body_five_div_one">3室2厅2卫-110㎡</div>
                        <div class="subject_body_five_div_two">
                            <div class="subject_body_five_div_two_div_one">在售</div>
                            <div class="subject_body_five_div_two_div_two">明厨明卫</div>
                            <div class="subject_body_five_div_two_div_three">户型方正</div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <el-image :src="'static/img/资源4.png'"></el-image>
                         <div class="subject_body_five_div_one">3室2厅2卫-110㎡</div>
                        <div class="subject_body_five_div_two">
                            <div class="subject_body_five_div_two_div_one">在售</div>
                            <div class="subject_body_five_div_two_div_two">明厨明卫</div>
                            <div class="subject_body_five_div_two_div_three">户型方正</div>
                        </div>
                    </el-col>
                </el-row>
            </div>    
        </div>
        
      
    </div>
   
    <div class="tail">
         <div class="tail_Horizontalline"></div>
         <div class="tail_body">
             <el-row :gutter="20">
                  <el-col :span="6">
                      <el-row :gutter="20">
                          <el-col :span="12">
                              <i class="el-icon-share tail_one_i"></i>
                              <span class="tail_one_div">分享</span>
                          </el-col>
                          <el-col :span="12">
                               <i class="el-icon-star-off tail_one_i"></i> 
                               <span>收藏</span>
                          </el-col>
                      </el-row>
                  </el-col>  
                  <el-col :span="18">
                      <el-row :gutter="20">
                          <el-col :span="12">
                                <div class="tail_two_div_one">
                                      <div class="tail_two_div_span">微聊</div>
                                      <span>快速在线咨询</span>  
                                </div>
                          </el-col>
                          <el-col :span="12">
                                <div class="tail_two_div_two">
                                      <div class="tail_two_div_span">电话咨询</div>
                                      <span>保护你的真实号码</span>
                                </div>  
                          </el-col>
                      </el-row>
                          
                          
                  </el-col>
             </el-row>   

         </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const that = this;
    return {
      imgSrc: [
          "/static/img/资源 5.png",
          "/static/img/bg3.jpg"

      ],
      watchIndex: 0,
      option1: {
        slidesPerView: 1, //显示slide的数量
        centeredSlides: true, //居中显示
        loop: true, //循环
        initialSlide: 0, //初始索引
        spaceBetween: 0, //间距
        on: {
          slideChangeTransitionStart: function() {
            // 获取点击的索引.
            let realIndex = this.realIndex;
            that.watchIndex = realIndex+1;
            // console.log(realIndex);
            // 此处可自定义点击事件,注意此处this指向swiper,定义_this
          }
        }
      }
    };
  }
};
</script>
<style lang="less" scoped>
    @import url("less/House.less");
</style>