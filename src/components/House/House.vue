<template>
  <div class="info">
    <div class="subject">
        <!-- <div class="count">0/5</div> -->
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
                        
                        <div>
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
    return {
      imgSrc: [
          "/static/img/资源 5.png",
          "/static/img/bg3.jpg"

      ],
      option1: {
        slidesPerView: 1, //显示slide的数量
        centeredSlides: true, //居中显示
        loop: true, //循环
        initialSlide: 0, //初始索引
        spaceBetween: 0, //间距
        on: {
          click: function() {
            // 获取点击的索引.
            let realIndex = this.realIndex;
            console.log(realIndex);
            // 此处可自定义点击事件,注意此处this指向swiper,定义_this
          }
        }
      }
    };
  }
};
</script>
<style lang="less" scoped>
.info {
    position: absolute;
    width: 100%;
    height: 100%;
  .count {
      position: fixed;
      z-index: 2;
      width: 4rem;
      height: 1rem;
      border-radius: 10px;
      background-color: aliceblue;
      right: 0;
      top: 11rem;
  }
    // ::-webkit-scrollbar {
    // width: 0px;
    // height: 1px;
    // }
    // ::-webkit-scrollbar-thumb {
    //     border-radius: 5px;
    //     -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    //     background: rgba(0, 0, 0, 0.2);
    // } 
  .subject {
      height: 92%;
      overflow-x: hidden;
      overflow-y: auto;
     .avatar {
       //  width: 100%;
        background-color: yellowgreen;
        height: 14rem;
        color: #fff;
       //  line-height: 200px;
       //  text-align: center;
       //  font-size: 24px;
        z-index: 100;
       img {
           width: 100%;
           height: 100%;
       }
     }
     .subject_body {
         margin: 0 auto;
         width: 94%;   
         .subject_body_div1_one {
             text-align: left;
             font-size: 1rem; 
             font-weight: bold;
         }
         .subject_body_div1_two {
             color: white;
             width: 2rem;
             font-size: 0.5rem;
             height: 1rem;
             background-color: #FC7B76;
             line-height: 1.1rem;
         }
         .subject_body_bottom {
             width: 100%;
           //   border: 1px solid blue;
             margin-top: 0.5rem;
         }
         .subject_body_div2_one {
             text-align: left;
             font-size: 0.8rem;
             color: red;
         }
         .subject_body_div2_two {
             font-size: 1.3rem;
         } 
         .subject_body_div2_three {
             margin-left: 1rem;
             color: #BFBFC3;
         }
         .subject_body_div3_one {
             text-align: center;
             color: white;
             .subject_body_div3_one_span_one {
                 background-color: #17C896;
             }
             .subject_body_div3_one_span_two {
                 background-color: #E0A0A0;
                 margin-left: 0.5rem; 
             }
             .subject_body_div3_one_span_three {
                 background-color: #ECC896;
                  margin-left: 0.5rem; 
             }
             .subject_body_div3_one_span_four {
                 background-color: #C5A9DD; 
                  margin-left: 0.5rem;
             }
             div {
                 width: 4rem;
                 float: left;
             }
         }
         .subject_body_Horizontalline {
             margin-top: 0.6rem;
             margin-bottom: 0.6rem;
             width: 100%;
             border-top: 1px solid #DCDFE6;
         }
         .subject_body_Horizontalline_two {
             margin-top: 0.6rem;
           //   margin-bottom: 0rem;
             width: 100%;
             border-top: 1px solid #DCDFE6;
         }
         .subject_body_two {
             font-size: 0.8rem;
             .subject_body_two_margin {
                 margin-top: 0.8rem;
             }
             .subject_body_two_right {
                 color: #A3AAAF;
                 text-align: left;
             }
             .subject_body_two_left {
               //   font-weight: bolder;
                 text-align: left;
             }
             .subject_body_two_left_four {
                 color: #B3C4D1;
                 text-align: left;
             }
         }
         .subject_body_three {
             margin-top: 1rem;
             text-align: left;
             img {
                 width: 2rem;
                 margin-right: 2rem;
             }
             div {
                font-size: 0.9rem;
             }
         }
         .subject_body_four {
             h2 {
                 text-align: left;
             }
             .subject_body_four_div {
                 text-align: right;
                 margin-top: 1rem;
             }
         }
         .subject_body_five {
             
             .subject_body_five_div_one {
                 text-align: left;
                 font-weight: bold;
                 font-size: 0.8rem;
                 margin-top: 0.5rem;
                 margin-bottom: 0.4rem;
             }
             .subject_body_five_div_two {
                 text-align: center;
                 .subject_body_five_div_two_div_one{
                     width: 2rem;
                     color: white;
                     background-color: #FC7B76;
                     margin-right: 0.3rem;
                 }
                 .subject_body_five_div_two_div_two{
                     width: 3.3rem;
                     color: #FBBE76;
                     background-color: #FFF3E5;
                     margin-right: 0.3rem;
                 }
                 .subject_body_five_div_two_div_three{
                     width: 3.3rem;
                     color: #C9B2DB;
                     background-color: #F5F2F9;
                     
                 }
                 div {
                     float: left;
                     
                 }
             }
         }

     }  
 }
   
 .tail {
     position: fixed;
     width: 100%;
     height: 3.1rem;
   //   background-color: blue;
     bottom: 0;
     .tail_Horizontalline {
           border-top: 1px solid #DCDFE6;
           margin-bottom: 0.15rem;
     }
     .tail_body {
         width: 95%;
         height: 100%;
         margin: 0 auto;
        .tail_one_i {
           font-size: 1.4rem;
           margin-top: 0.3rem;
           margin-bottom: 0.2rem;
        }
        .tail_two_div_one {
           width: 7.6rem;
           height: 2.7rem;
           background-color: #FF9B15;
           border-radius: 5px;
           color: white;
        }
        .tail_two_div_two {
           width: 7.6rem;
           height: 2.7rem;
           background-color: #74C64A;
           border-radius: 5px; 
           color: white;
        }
        .tail_two_div_span {
           font-weight: bold;
           font-size: 1rem;
           padding-top: 0.4rem;
        }  
     }

 }
}
</style>